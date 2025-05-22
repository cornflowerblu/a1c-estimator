import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '../src/app/auth/login/page';
import RegisterPage from '../src/app/auth/register/page';
import ResetPasswordPage from '../src/app/auth/reset-password/page';

// Mock useSearchParams for the verify page
jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: jest.fn((param) => {
      if (param === 'token') return 'valid-token';
      return null;
    }),
  }),
}));

describe('Authentication Pages', () => {
  describe('Login Page', () => {
    it('renders login form correctly', () => {
      render(<LoginPage />);
      
      expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
      expect(screen.getByText(/Forgot your password/i)).toBeInTheDocument();
      expect(screen.getByText(/Don't have an account/i)).toBeInTheDocument();
    });

    it('shows validation errors when form is submitted with empty fields', async () => {
      render(<LoginPage />);
      
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
      });
    });

    it('shows loading state when form is submitted with valid data', async () => {
      render(<LoginPage />);
      
      const emailInput = screen.getByLabelText(/Email address/i);
      const passwordInput = screen.getByLabelText(/Password/i);
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
      
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
        // Check for loading spinner (SVG)
        expect(submitButton.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('Register Page', () => {
    it('renders registration form correctly', () => {
      render(<RegisterPage />);
      
      expect(screen.getByText('Create your account')).toBeInTheDocument();
      expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Confirm password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Create account/i })).toBeInTheDocument();
      expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
    });

    it('shows validation errors when passwords do not match', async () => {
      render(<RegisterPage />);
      
      const nameInput = screen.getByLabelText(/Full name/i);
      const emailInput = screen.getByLabelText(/Email address/i);
      const passwordInput = screen.getByLabelText(/^Password/i);
      const confirmPasswordInput = screen.getByLabelText(/Confirm password/i);
      const termsCheckbox = screen.getByLabelText(/I agree to the/i);
      const submitButton = screen.getByRole('button', { name: /Create account/i });
      
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });
      fireEvent.click(termsCheckbox);
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
      });
    });
  });

  describe('Reset Password Page', () => {
    it('renders reset password form correctly', () => {
      render(<ResetPasswordPage />);
      
      expect(screen.getByText('Reset your password')).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send reset link/i })).toBeInTheDocument();
      expect(screen.getByText(/Remember your password/i)).toBeInTheDocument();
    });

    it('shows success message after form submission', async () => {
      render(<ResetPasswordPage />);
      
      const emailInput = screen.getByLabelText(/Email address/i);
      const submitButton = screen.getByRole('button', { name: /Send reset link/i });
      
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText('Check your email')).toBeInTheDocument();
        expect(screen.getByText(/We've sent a password reset link/i)).toBeInTheDocument();
      });
    });
  });
});