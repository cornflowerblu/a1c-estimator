'use client';

import { AuthLayout } from '@a1c/ui';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthInput, AuthButton, AuthError } from '@a1c/ui/src/lib/auth/components';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      console.log(`Sending password reset email to ${email}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSent(true);
    } catch (err) {
      setError((err as Error).message || 'Failed to send password reset email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll send you a link to reset your password"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <AuthError message={error} />
          
          {isSent ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Check your email</h3>
              <p className="text-gray-600 mb-4">
                We've sent a password reset link to <span className="font-medium">{email}</span>.
                Click the link in the email to reset your password.
              </p>
              <p className="text-sm text-gray-500">
                The link will expire in 10 minutes. If you don't see the email, check your spam folder.
              </p>
              <div className="mt-6">
                <AuthButton
                  type="button"
                  onClick={() => router.push('/login')}
                  fullWidth={false}
                >
                  Return to Login
                </AuthButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <AuthInput
                label="Email Address"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <div>
                <AuthButton
                  type="submit"
                  isLoading={isLoading}
                >
                  Send Reset Link
                </AuthButton>
              </div>
            </form>
          )}
          
          {!isSent && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Back to login
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}