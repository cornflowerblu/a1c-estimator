import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './login-form';
import { useAuth } from '@a1c/utils';

// Mock the useAuth hook
jest.mock('@a1c/utils', () => ({
  useAuth: jest.fn(),
}));

describe('LoginForm', () => {
  const mockSignIn = jest.fn();
  const mockSendMagicLink = jest.fn();
  const mockSocialSignIn = jest.fn();
  const mockOnSuccess = jest.fn();
  const mockOnError = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default mock implementation
    (useAuth as jest.Mock).mockReturnValue({
      signIn: mockSignIn,
      sendMagicLink: mockSendMagicLink,
      socialSignIn: mockSocialSignIn,
      isLoading: false,
    });
  });
  
  it('renders the login form', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in with email/i)).toBeInTheDocument();
    expect(screen.getByText(/send magic link/i)).toBeInTheDocument();
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });
  
  it('handles email/password login', async () => {
    mockSignIn.mockResolvedValue({ username: 'test@example.com' });
    
    render(<LoginForm onSuccess={mockOnSuccess} onError={mockOnError} />);
    
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    
    fireEvent.click(screen.getByText(/sign in with email/i));
    
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });
  
  it('handles magic link login', async () => {
    mockSendMagicLink.mockResolvedValue({ success: true });
    
    render(<LoginForm onSuccess={mockOnSuccess} onError={mockOnError} />);
    
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    });
    
    fireEvent.click(screen.getByText(/send magic link/i));
    
    await waitFor(() => {
      expect(mockSendMagicLink).toHaveBeenCalledWith('test@example.com');
      expect(screen.getByText(/check your email/i)).toBeInTheDocument();
    });
  });
  
  it('handles social login', async () => {
    render(<LoginForm onSuccess={mockOnSuccess} onError={mockOnError} />);
    
    fireEvent.click(screen.getByText(/google/i));
    
    await waitFor(() => {
      expect(mockSocialSignIn).toHaveBeenCalledWith('Google');
    });
  });
  
  it('handles login errors', async () => {
    const mockError = new Error('Invalid credentials');
    mockSignIn.mockRejectedValue(mockError);
    
    render(<LoginForm onSuccess={mockOnSuccess} onError={mockOnError} />);
    
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrong-password' },
    });
    
    fireEvent.click(screen.getByText(/sign in with email/i));
    
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'wrong-password');
      expect(mockOnError).toHaveBeenCalledWith(mockError);
    });
  });
  
  it('shows loading state', () => {
    (useAuth as jest.Mock).mockReturnValue({
      signIn: mockSignIn,
      sendMagicLink: mockSendMagicLink,
      socialSignIn: mockSocialSignIn,
      isLoading: true,
    });
    
    render(<LoginForm />);
    
    expect(screen.getByText(/signing in\.\.\./i)).toBeInTheDocument();
    expect(screen.getByText(/signing in\.\.\./i)).toBeDisabled();
  });
});