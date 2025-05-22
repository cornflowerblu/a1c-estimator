'use client';

import React, { useState } from 'react';
import { AuthCard, FormInput, Button, AuthLink } from '../components';

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }
    
    // Show loading state
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Handle successful password reset request
      setIsSubmitted(true);
    } catch (error) {
      console.error('Password reset request failed', error);
      setError('Failed to send password reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthCard 
        title="Check your email" 
        subtitle="We've sent a password reset link to your email address"
      >
        <div className="text-center">
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              If you don't see it, please check your spam folder. If you still don't see it, please try again or contact support.
            </p>
          </div>
          <div className="mt-6">
            <Button
              type="button"
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Try again
            </Button>
          </div>
          <div className="mt-4">
            <AuthLink href="/auth/login">
              Return to login
            </AuthLink>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard 
      title="Reset your password" 
      subtitle="Enter your email address and we'll send you a link to reset your password"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          error={error}
          disabled={isLoading}
        />

        <div>
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Send reset link
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Remember your password?{' '}
          <AuthLink href="/auth/login">
            Sign in
          </AuthLink>
        </p>
      </div>
    </AuthCard>
  );
}