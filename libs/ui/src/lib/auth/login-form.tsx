import React, { useState } from 'react';
import { useAuth } from '@a1c/utils';

export interface LoginFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function LoginForm({ onSuccess, onError }: LoginFormProps) {
  const { signIn, sendMagicLink, socialSignIn, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const handleMagicLinkLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMagicLink(email);
      setIsMagicLinkSent(true);
      // In a real app, you might want to redirect to a page that prompts for the code
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const handleSocialLogin = async (provider: 'Google' | 'Facebook' | 'Apple') => {
    try {
      await socialSignIn(provider);
      // The redirect will happen automatically
    } catch (error) {
      onError?.(error as Error);
    }
  };

  if (isMagicLinkSent) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Check Your Email</h2>
        <p className="text-gray-600 mb-4 text-center">
          We've sent a magic link to <strong>{email}</strong>. Click the link in the email to sign in.
        </p>
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          onClick={() => setIsMagicLinkSent(false)}
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      
      {/* Email Password Form */}
      <form onSubmit={handleEmailLogin} className="mb-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 disabled:bg-blue-300"
        >
          {isLoading ? "Signing In..." : "Sign In with Email"}
        </button>
      </form>
      
      {/* Magic Link Option */}
      <div className="mb-6">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-600">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        <button
          onClick={handleMagicLinkLogin}
          disabled={isLoading || !email}
          className="w-full mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-200 disabled:bg-gray-400"
        >
          {isLoading ? "Sending..." : "Send Magic Link"}
        </button>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          We'll email you a magic link for password-free sign in
        </p>
      </div>
      
      {/* Social Login Options */}
      <div>
        <div className="relative flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-600">Social Login</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded hover:bg-gray-50 transition duration-200"
          >
            Google
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded hover:bg-gray-50 transition duration-200"
          >
            Facebook
          </button>
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded hover:bg-gray-50 transition duration-200"
          >
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}