'use client';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { AuthProvider } from '@a1c/types';

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
    <div className="login-form">
      <h2>{showMagicLink ? 'Magic Link Login' : 'Login'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {!showMagicLink && (
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : showMagicLink ? 'Send Magic Link' : 'Login'}
        </button>
      </form>
      
      <div className="login-options">
        <button 
          type="button" 
          onClick={() => setShowMagicLink(!showMagicLink)}
          className="link-button"
        >
          {showMagicLink ? 'Use Password' : 'Use Magic Link'}
        </button>
        
        <div className="social-login">
          <button type="button" onClick={() => handleSocialLogin('google')}>
            Login with Google
          </button>
          <button type="button" onClick={() => handleSocialLogin('apple')}>
            Login with Apple
          </button>
        </div>
        
        <button type="button" onClick={handlePasskeyLogin}>
          Login with Passkey
        </button>
      </div>
    </div>
  );
}
