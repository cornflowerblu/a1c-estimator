'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Note: We're keeping the import for future implementation
import { startRegistration } from '@simplewebauthn/browser';

// Note: This component is being kept for future passkey support implementation
export function PasskeySetup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegisterPasskey = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, we would:
      // 1. Call an API endpoint to get registration options
      // 2. Use startRegistration from @simplewebauthn/browser
      // 3. Send the response to the server for verification
      
      // For now, we'll just simulate the process
      
      // This would normally come from the server
      const mockOptions = {
        challenge: 'mockChallenge',
        rp: {
          name: 'A1C Estimator',
          id: window.location.hostname,
        },
        user: {
          id: 'mockUserId',
          name: 'user@example.com',
          displayName: 'User',
        },
        pubKeyCredParams: [
          { type: 'public-key', alg: -7 }, // ES256
          { type: 'public-key', alg: -257 }, // RS256
        ],
        timeout: 60000,
        attestation: 'none',
        excludeCredentials: [],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          userVerification: 'preferred',
          requireResidentKey: true,
        },
      };
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, we would call:
      // const attestationResponse = await startRegistration(options);
      // And then send the response to the server
      
      console.log('Registering passkey with options:', mockOptions);
      
      setSuccess(true);
    } catch (err) {
      console.error('Error registering passkey:', err);
      setError((err as Error).message || 'Failed to register passkey');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success ? (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Passkey registered successfully!</h3>
            <p className="text-gray-600 mb-4">
              You can now use your passkey to sign in to your account.
            </p>
            <Link
              href="/login"
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <p className="text-gray-600 text-center mb-4">
                Passkeys provide a more secure way to sign in without passwords.
                They use biometrics (like your fingerprint or face) or your device PIN.
              </p>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-2">Benefits of using passkeys:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>More secure than passwords</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>No need to remember complex passwords</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Quick and easy sign-in process</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleRegisterPasskey}
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Setting up...
                </span>
              ) : 'Register Passkey'}
            </button>
          </>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Skip for now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}