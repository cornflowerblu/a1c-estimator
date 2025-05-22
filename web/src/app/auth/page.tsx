'use client';

import React, { useState } from 'react';
import { AuthToggle, AuthStatus } from '@a1c/ui';
import { AuthProvider, AUTH_MODE, isUsingRealCognito } from '@a1c/services';

/**
 * Authentication page component
 */
export default function AuthPage() {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  /**
   * Handle successful authentication
   */
  const handleSuccess = () => {
    setMessage({
      text: 'Authentication successful!',
      type: 'success',
    });
  };

  /**
   * Handle authentication error
   */
  const handleError = (error: string) => {
    setMessage({
      text: error,
      type: 'error',
    });
  };

  return (
    <AuthProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Authentication Demo</h1>
        
        <div className="mb-8 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Authentication Mode</h2>
          <p>
            Current mode: <span className="font-mono bg-white px-2 py-1 rounded">{AUTH_MODE}</span>
          </p>
          <p className="mt-2">
            {isUsingRealCognito() 
              ? 'Using real AWS Cognito authentication.' 
              : 'Using mock authentication for development.'}
          </p>
          <p className="mt-2 text-sm">
            To switch modes, edit the AUTH_MODE value in the auth.config.ts file.
          </p>
        </div>
        
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-100 border border-green-400 text-green-700'
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Authentication Forms</h2>
            <AuthToggle onSuccess={handleSuccess} onError={handleError} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Current Status</h2>
            <AuthStatus />
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Test Credentials</h3>
              <p className="font-mono bg-white p-2 rounded">
                Email: test@example.com<br />
                Password: Password123!
              </p>
              <p className="mt-2 text-sm text-gray-600">
                These credentials are hardcoded in the mock authentication service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}