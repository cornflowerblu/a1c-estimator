import { useState, useEffect, useCallback } from 'react';
import { AuthService } from '@a1c/services';

/**
 * Custom hook for authentication state and methods
 * @returns Authentication state and methods
 */
export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Load the current user on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const currentUser = await AuthService.getCurrentUser();
        
        if (currentUser) {
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        setError(err);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Sign in with email and password
  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const user = await AuthService.signIn(email, password);
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sign up a new user
  const signUp = useCallback(async (email: string, password: string, attributes = {}) => {
    try {
      setIsLoading(true);
      setError(null);
      return await AuthService.signUp(email, password, attributes);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Confirm sign up with verification code
  const confirmSignUp = useCallback(async (email: string, code: string) => {
    try {
      setIsLoading(true);
      setError(null);
      return await AuthService.confirmSignUp(email, code);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sign out
  const signOut = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await AuthService.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Send magic link
  const sendMagicLink = useCallback(async (email: string) => {
    try {
      setIsLoading(true);
      setError(null);
      return await AuthService.sendMagicLink(email);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Complete magic link authentication
  const completeMagicLinkAuth = useCallback(async (email: string, code: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const user = await AuthService.completeMagicLinkAuth(email, code);
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sign in with a social provider
  const socialSignIn = useCallback(async (provider: 'Google' | 'Facebook' | 'Apple') => {
    try {
      setIsLoading(true);
      setError(null);
      return await AuthService.federatedSignIn(provider);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    isAuthenticated,
    user,
    error,
    signIn,
    signUp,
    confirmSignUp,
    signOut,
    sendMagicLink,
    completeMagicLinkAuth,
    socialSignIn,
  };
}