'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthCard, Button, AuthLink } from '../components';

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setVerificationStatus('error');
        setErrorMessage('No verification token provided');
        setIsLoading(false);
        return;
      }

      try {
        // Simulate API call to verify token
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        // For demo purposes, let's consider tokens starting with 'valid' as valid
        if (token.startsWith('valid')) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
          setErrorMessage('Invalid or expired verification token');
        }
      } catch (error) {
        console.error('Verification failed', error);
        setVerificationStatus('error');
        setErrorMessage('An error occurred during verification');
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  return (
    <AuthCard 
      title="Email Verification" 
      subtitle={
        verificationStatus === 'loading' 
          ? 'Verifying your email address...' 
          : verificationStatus === 'success'
            ? 'Your email has been verified'
            : 'Verification failed'
      }
    >
      <div className="flex flex-col items-center justify-center py-6">
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="text-gray-600">Verifying your email address...</p>
          </div>
        ) : verificationStatus === 'success' ? (
          <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">Your email has been successfully verified.</p>
            <div className="mt-6">
              <Button
                type="button"
                fullWidth
                onClick={() => window.location.href = '/auth/login'}
              >
                Continue to login
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-red-600">{errorMessage}</p>
            <div className="mt-6">
              <Button
                type="button"
                variant="outline"
                fullWidth
                onClick={() => window.location.reload()}
              >
                Try again
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Need help?{' '}
                <AuthLink href="/support">
                  Contact support
                </AuthLink>
              </p>
            </div>
          </div>
        )}
      </div>
    </AuthCard>
  );
}