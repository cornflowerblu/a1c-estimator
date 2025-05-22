import React, { useState, useEffect } from 'react';
import { useAuth } from '@a1c/utils';

export interface MagicLinkVerificationProps {
  email: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function MagicLinkVerification({ email, onSuccess, onError }: MagicLinkVerificationProps) {
  const { completeMagicLinkAuth, isLoading } = useAuth();
  const [code, setCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Extract code from URL if present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl) {
      setCode(codeFromUrl);
      handleVerification(codeFromUrl);
    }
  }, []);

  const handleVerification = async (verificationCode: string) => {
    if (!verificationCode) return;
    
    setIsVerifying(true);
    try {
      await completeMagicLinkAuth(email, verificationCode);
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleVerification(code);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Verify Magic Link</h2>
      
      <p className="text-gray-600 mb-6 text-center">
        Enter the verification code from the magic link sent to <strong>{email}</strong>.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-2">
            Verification Code
          </label>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter code"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || isVerifying || !code}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 disabled:bg-blue-300"
        >
          {isLoading || isVerifying ? "Verifying..." : "Verify & Sign In"}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-800 transition duration-200"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}