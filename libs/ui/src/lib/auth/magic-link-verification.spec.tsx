import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MagicLinkVerification } from './magic-link-verification';
import { useAuth } from '@a1c/utils';

// Mock the useAuth hook
jest.mock('@a1c/utils', () => ({
  useAuth: jest.fn(),
}));

// Mock window.location
const mockLocation = new URL('https://example.com');
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('MagicLinkVerification', () => {
  const mockCompleteMagicLinkAuth = jest.fn();
  const mockOnSuccess = jest.fn();
  const mockOnError = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default mock implementation
    (useAuth as jest.Mock).mockReturnValue({
      completeMagicLinkAuth: mockCompleteMagicLinkAuth,
      isLoading: false,
    });
    
    // Reset URL parameters
    mockLocation.search = '';
  });
  
  it('renders the verification form', () => {
    render(<MagicLinkVerification email="test@example.com" />);
    
    expect(screen.getByText(/verify magic link/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/verification code/i)).toBeInTheDocument();
    expect(screen.getByText(/verify & sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
  });
  
  it('handles manual code verification', async () => {
    mockCompleteMagicLinkAuth.mockResolvedValue({ username: 'test@example.com' });
    
    render(
      <MagicLinkVerification 
        email="test@example.com" 
        onSuccess={mockOnSuccess} 
        onError={mockOnError} 
      />
    );
    
    fireEvent.change(screen.getByLabelText(/verification code/i), {
      target: { value: '123456' },
    });
    
    fireEvent.click(screen.getByText(/verify & sign in/i));
    
    await waitFor(() => {
      expect(mockCompleteMagicLinkAuth).toHaveBeenCalledWith('test@example.com', '123456');
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });
  
  it('automatically verifies code from URL', async () => {
    mockCompleteMagicLinkAuth.mockResolvedValue({ username: 'test@example.com' });
    
    // Set URL with code parameter
    mockLocation.search = '?code=654321';
    
    render(
      <MagicLinkVerification 
        email="test@example.com" 
        onSuccess={mockOnSuccess} 
        onError={mockOnError} 
      />
    );
    
    await waitFor(() => {
      expect(mockCompleteMagicLinkAuth).toHaveBeenCalledWith('test@example.com', '654321');
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });
  
  it('handles verification errors', async () => {
    const mockError = new Error('Invalid verification code');
    mockCompleteMagicLinkAuth.mockRejectedValue(mockError);
    
    render(
      <MagicLinkVerification 
        email="test@example.com" 
        onSuccess={mockOnSuccess} 
        onError={mockOnError} 
      />
    );
    
    fireEvent.change(screen.getByLabelText(/verification code/i), {
      target: { value: 'invalid-code' },
    });
    
    fireEvent.click(screen.getByText(/verify & sign in/i));
    
    await waitFor(() => {
      expect(mockCompleteMagicLinkAuth).toHaveBeenCalledWith('test@example.com', 'invalid-code');
      expect(mockOnError).toHaveBeenCalledWith(mockError);
    });
  });
  
  it('shows loading state', () => {
    (useAuth as jest.Mock).mockReturnValue({
      completeMagicLinkAuth: mockCompleteMagicLinkAuth,
      isLoading: true,
    });
    
    render(<MagicLinkVerification email="test@example.com" />);
    
    expect(screen.getByText(/verifying\.\.\./i)).toBeInTheDocument();
    expect(screen.getByText(/verifying\.\.\./i)).toBeDisabled();
  });
});