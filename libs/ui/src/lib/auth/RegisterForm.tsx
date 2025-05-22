'use client';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AuthProvider } from '@a1c/types';
import { AuthInput, AuthButton, AuthError, SocialLoginButtons } from './components';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { register, loginWithSocial, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    await register(email, password, name);
    setIsLoading(false);
  };

  const handleSocialLogin = async (provider: AuthProvider) => {
    await loginWithSocial(provider);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        
        <AuthError message={error || formError} />
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            label="Full Name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <AuthInput
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <AuthInput
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          
          <div className="pt-2">
            <AuthButton
              type="submit"
              isLoading={isLoading}
            >
              Create Account
            </AuthButton>
          </div>
        </form>
        
        <SocialLoginButtons onSocialLogin={handleSocialLogin} mode="register" />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}