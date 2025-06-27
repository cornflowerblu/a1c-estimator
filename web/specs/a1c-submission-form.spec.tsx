import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { A1CSubmissionForm } from '../src/app/components/a1c-submission-form';
import { useAuth } from '@a1c/auth';

// Mock the auth hook
jest.mock('@a1c/auth', () => ({
  useAuth: jest.fn(),
}));

// Mock fetch for API calls
global.fetch = jest.fn();

describe('A1CSubmissionForm', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Default auth mock implementation
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
    });
    
    // Default fetch mock implementation
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        message: 'A1C calculation submitted successfully',
        data: {
          user: {
            id: 'test-user-id',
            name: 'Test User',
            email: 'test@example.com',
          },
          run: {
            id: 'test-run-id',
            name: 'A1C Calculation - 2023-03-15',
            calculatedA1C: 5.9,
          },
          readingsCount: 1,
        },
      }),
    });
  });

  it('renders the form with initial step', () => {
    render(<A1CSubmissionForm />);
    
    // Check if the form title is rendered
    expect(screen.getByText('A1C Calculation Submission')).toBeInTheDocument();
    
    // Check if the first step is rendered
    expect(screen.getByText('User Information')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  });

  it('pre-fills form with authenticated user data if available', () => {
    // Mock authenticated user
    (useAuth as jest.Mock).mockReturnValue({
      user: {
        id: 'auth-user-id',
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });
    
    render(<A1CSubmissionForm />);
    
    // Check if form fields are pre-filled
    expect(screen.getByLabelText('First Name')).toHaveValue('John');
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe');
    expect(screen.getByLabelText('Email Address')).toHaveValue('john.doe@example.com');
    expect(screen.getByLabelText('User ID (Optional)')).toHaveValue('auth-user-id');
  });

  it('validates user information before proceeding to next step', () => {
    render(<A1CSubmissionForm />);
    
    // Try to proceed without filling required fields
    fireEvent.click(screen.getByText('Next'));
    
    // Check if validation errors are displayed
    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    
    // Fill in the required fields
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'jane.smith@example.com' } });
    
    // Try to proceed again
    fireEvent.click(screen.getByText('Next'));
    
    // Check if we moved to the next step
    expect(screen.getByText('A1C Readings')).toBeInTheDocument();
  });

  it('allows adding and removing A1C readings', async () => {
    render(<A1CSubmissionForm />);
    
    // Fill in user information and proceed to readings step
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'jane.smith@example.com' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Check if readings step is displayed
    expect(screen.getByText('A1C Readings')).toBeInTheDocument();
    
    // Add a reading value
    fireEvent.change(screen.getByLabelText('A1C Value (%)'), { target: { value: '5.7' } });
    
    // Add another reading
    fireEvent.click(screen.getByText('Add Another Reading'));
    
    // Check if we now have two readings
    const a1cValueInputs = screen.getAllByLabelText('A1C Value (%)');
    expect(a1cValueInputs.length).toBe(2);
    
    // Remove the second reading
    fireEvent.click(screen.getAllByText('Remove')[0]);
    
    // Check if we're back to one reading
    expect(screen.getAllByLabelText('A1C Value (%)').length).toBe(1);
  });

  it('submits the form successfully', async () => {
    render(<A1CSubmissionForm />);
    
    // Fill in user information
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'jane.smith@example.com' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Fill in A1C reading
    fireEvent.change(screen.getByLabelText('A1C Value (%)'), { target: { value: '5.7' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Check if review step is displayed
    expect(screen.getByText('Review Your Information')).toBeInTheDocument();
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));
    
    // Check if the API was called with the correct data
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/a1c-calculations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"firstName":"Jane"'),
      });
    });
    
    // Check if success message is displayed
    await waitFor(() => {
      expect(screen.getByText('Submission Successful!')).toBeInTheDocument();
    });
  });

  it('handles API errors', async () => {
    // Mock API error
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({
        success: false,
        message: 'Internal server error',
      }),
    });
    
    render(<A1CSubmissionForm />);
    
    // Fill in user information
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'jane.smith@example.com' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Fill in A1C reading
    fireEvent.change(screen.getByLabelText('A1C Value (%)'), { target: { value: '5.7' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));
    
    // Check if error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Internal server error')).toBeInTheDocument();
    });
  });
});