'use client';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AuthProvider } from '@a1c/types';
import { AuthInput, AuthButton, AuthError, SocialLoginButtons } from './components';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMagicLink, setShowMagicLink] = useState(false);
  const { login, loginWithMagicLink, loginWithSocial, loginWithPasskey, error, setError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      if (showMagicLink) {
        await loginWithMagicLink(email);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError((err as Error).message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: AuthProvider) => {
    try {
      await loginWithSocial(provider);
    } catch (err) {
      setError((err as Error).message || `An error occurred during ${provider} login`);
    }
  };

  const handlePasskeyLogin = async () => {
    try {
      await loginWithPasskey();
    } catch (err) {
      setError((err as Error).message || 'An error occurred during passkey login');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {showMagicLink ? 'Magic Link Login' : 'Sign In'}
        </h2>
        
        <AuthError message={error} />
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          {!showMagicLink && (
            <div className="space-y-4">
              <AuthInput
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <div className="flex justify-end">
                <a 
                  href="/forgot-password" 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          )}
          
          <div className="pt-2">
            <AuthButton 
              type="submit" 
              isLoading={isLoading}
            >
              {showMagicLink ? 'Send Magic Link' : 'Sign In'}
            </AuthButton>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            type="button" 
            onClick={() => setShowMagicLink(!showMagicLink)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {showMagicLink ? 'Use Password Instead' : 'Use Magic Link Instead'}
          </button>
        </div>
        
        <SocialLoginButtons onSocialLogin={handleSocialLogin} mode="login" />
        
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handlePasskeyLogin}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H9v5l4.25 2.52.75-1.03-3.5-2.09V5z" clipRule="evenodd" />
            </svg>
            Login with Passkey
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
