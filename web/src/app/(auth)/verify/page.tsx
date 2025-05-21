'use client';

import { AuthLayout } from '@a1c/ui';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerifyPage() {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Verify your account"
      subtitle="Check your email for a verification code"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
              />
            </div>
            
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <input
                id="code"
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </span>
                ) : 'Verify Account'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isLoading}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Resend verification code
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