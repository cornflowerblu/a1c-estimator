'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthProvider } from '@a1c/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithMagicLink: (email: string) => Promise<boolean>;
  loginWithSocial: (provider: AuthProvider) => Promise<boolean>;
  loginWithPasskey: () => Promise<boolean>;
  register: (email: string, password: string, name?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real implementation, this would check the session
        // For now, we'll just check localStorage as a simple example
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Error checking authentication:', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      // For now, we'll just simulate a successful login
      const mockUser: User = {
        id: '123',
        email,
        name: email.split('@')[0],
        emailVerified: true,
      };
      
      setUser(mockUser);
};
      
      setUser(mockUser);
      // Use a secure storage method instead of localStorage
      // import { SecureStorage } from '@capacitor-community/secure-storage';
      await SecureStorage.set({ key: 'auth_user', value: JSON.stringify(mockUser) });
      return true;
    } catch (err) {
      setError((err as Error).message || 'Failed to login');
      return true;
    } catch (err) {
      setError((err as Error).message || 'Failed to login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithMagicLink = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      // For now, we'll just simulate sending a magic link
      console.log(`Magic link sent to ${email}`);
      return true;
    } catch (err) {
      setError((err as Error).message || 'Failed to send magic link');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithSocial = async (provider: AuthProvider): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would redirect to the social provider
      console.log(`Logging in with ${provider}`);
      return true;
    } catch (err) {
      setError((err as Error).message || `Failed to login with ${provider}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithPasskey = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would use WebAuthn
      console.log('Logging in with passkey');
      return true;
    } catch (err) {
      setError((err as Error).message || 'Failed to login with passkey');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name?: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      console.log(`Registering user ${email}`);
      return true;
    } catch (err) {
      setError((err as Error).message || 'Failed to register');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the auth service
      setUser(null);
      localStorage.removeItem('auth_user');
    } catch (err) {
      setError((err as Error).message || 'Failed to logout');
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    loginWithMagicLink,
    loginWithSocial,
    loginWithPasskey,
    register,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}