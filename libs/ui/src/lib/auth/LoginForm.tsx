'use client';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AuthProvider } from '@a1c/types';
import { SocialLoginButtons } from './SocialLoginButtons';
import { LoadingSpinner } from '../common/LoadingSpinner';
import Link from 'next/link';

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
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          
          {!showMagicLink && (
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? (
                <LoadingSpinner text={showMagicLink ? "Sending..." : "Signing in..."} />
              ) : (
                showMagicLink ? 'Send Magic Link' : 'Sign in'
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowMagicLink(!showMagicLink)}
            className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {showMagicLink ? 'Use Password Instead' : 'Use Magic Link Instead'}
          </button>
        </div>
        
        <SocialLoginButtons mode="login" />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
