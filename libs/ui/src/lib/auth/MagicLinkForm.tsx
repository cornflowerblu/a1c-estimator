'use client';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AuthInput, AuthButton, AuthError } from './components';

export function MagicLinkForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { loginWithMagicLink, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = await loginWithMagicLink(email);
    
    if (success) {
      setIsSent(true);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login with Magic Link
        </h2>
        
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
              We've sent a magic link to <span className="font-medium">{email}</span>.
              Click the link in the email to sign in.
            </p>
            <p className="text-sm text-gray-500">
              The link will expire in 10 minutes. If you don't see the email, check your spam folder.
            </p>
            <button
              type="button"
              onClick={() => setIsSent(false)}
              className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Use a different email
            </button>
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
                Send Magic Link
              </AuthButton>
            </div>
          </form>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Back to login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}