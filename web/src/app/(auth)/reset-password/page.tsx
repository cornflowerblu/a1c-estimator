'use client';

import { AuthLayout } from '@a1c/ui';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthInput, AuthButton, AuthError } from '@a1c/ui/src/lib/auth/components';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call the auth service
      console.log(`Resetting password for ${email} with token ${token}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login
      router.push('/login');
    } catch (err) {
      setError((err as Error).message || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  // Check if token is missing
  if (!token) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        subtitle="The password reset link is invalid or has expired"
      >
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              Please request a new password reset link.
            </p>
            <a
              href="/forgot-password"
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </a>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create new password"
      subtitle="Enter a new password for your account"
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
              label="New Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <AuthInput
              label="Confirm New Password"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            
            <div>
              <AuthButton
                type="submit"
                isLoading={isLoading}
              >
                Reset Password
              </AuthButton>
            </div>
          </form>
          
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
