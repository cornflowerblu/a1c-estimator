'use client';

import { AuthLayout } from '@a1c/ui';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthInput, AuthButton, AuthError } from '@a1c/ui/src/lib/auth/components';

function VerifyForm() {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      // For now, we'll just simulate verification
      console.log(`Verifying code ${verificationCode} for ${email}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login
      router.push('/login');
    } catch (err) {
      setError((err as Error).message || 'Failed to verify account');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      console.log(`Resending verification code to ${email}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert('Verification code resent successfully!');
    } catch (err) {
      setError((err as Error).message || 'Failed to resend verification code');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout
      title="Verify your account"
      subtitle="Check your email for a verification code"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <AuthError message={error} />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <AuthInput
              label="Email Address"
              id="email"
              type="email"
              value={email}
              disabled
            />
            
            <AuthInput
              label="Verification Code"
              id="code"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            
            <div>
              <AuthButton
                type="submit"
                isLoading={isLoading}
              >
                Verify Account
              </AuthButton>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResending ? 'Sending...' : 'Resend verification code'}
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Back to login
              </a>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
}