'use client';

import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import { useState } from "react";
import { AuthError, AuthErrorType, AuthUser, CognitoRegisterParams, CognitoSignInParams } from "../types";
import { mockCognitoAuth, cognitoConfig } from "../cognito-auth";

/**
 * Custom hook for authentication state and methods
 * 
 * This hook provides:
 * - User authentication state
 * - Sign-in methods (Cognito, social providers)
 * - Registration method for Cognito
 * - Sign-out method
 * - Error handling
 */
export function useAuth() {
  const { data: session, status } = useSession();
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Extract user from session
  const user: AuthUser | null = session?.user ? {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  } : null;

  const isAuthenticated = status === "authenticated";
  const isSessionLoading = status === "loading";

  /**
   * Sign in with Cognito (username/email and password)
   * 
   * @param params Username/email and password
   * @returns Success status and any error
   */
  const signInWithCognito = async ({ usernameOrEmail, password }: CognitoSignInParams) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use NextAuth's signIn method with the Cognito provider
      const result = await nextAuthSignIn("cognito", {
        username: usernameOrEmail,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        setError({
          type: AuthErrorType.INVALID_CREDENTIALS,
          message: result?.error || "Invalid username or password",
        });
        return { success: false, error: result?.error };
      }

      return { success: true };
    } catch (err) {
      console.error("Cognito sign-in error:", err);
      setError({
        type: AuthErrorType.UNKNOWN_ERROR,
        message: "An unexpected error occurred during sign-in",
      });
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register with Cognito
   * 
   * @param params Registration parameters (username, email, password, name)
   * @returns Success status and any error
   */
  const registerWithCognito = async ({ username, email, password, name }: CognitoRegisterParams) => {
    setIsLoading(true);
    setError(null);

    try {
      // For mock implementation, use our mock auth
      if (cognitoConfig.useMockCognito) {
        await mockCognitoAuth.register(username, email, password, name);
        
        // After registration, sign in automatically
        return signInWithCognito({ usernameOrEmail: username, password });
      } else {
        // In a real implementation, this would call the Cognito SDK
        // For now, we'll use the mock implementation
        await mockCognitoAuth.register(username, email, password, name);
        
        // After registration, sign in automatically
        return signInWithCognito({ usernameOrEmail: username, password });
      }
    } catch (err: any) {
      console.error("Cognito registration error:", err);
      
      // Handle specific error types
      if (err.message.includes("Username already exists")) {
        setError({
          type: AuthErrorType.USERNAME_EXISTS,
          message: "This username is already taken",
        });
      } else if (err.message.includes("Email already exists")) {
        setError({
          type: AuthErrorType.EMAIL_EXISTS,
          message: "An account with this email already exists",
        });
      } else {
        setError({
          type: AuthErrorType.UNKNOWN_ERROR,
          message: "An unexpected error occurred during registration",
        });
      }
      
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Sign in with a social provider
   * 
   * @param provider Provider ID (google, apple, facebook)
   * @returns Success status
   */
  const signInWithProvider = async (provider: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await nextAuthSignIn(provider, { callbackUrl: "/" });
      return { success: true };
    } catch (err) {
      console.error(`${provider} sign-in error:`, err);
      setError({
        type: AuthErrorType.UNKNOWN_ERROR,
        message: `An error occurred during ${provider} sign-in`,
      });
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Sign in with email (magic link)
   * 
   * @param email User's email address
   * @returns Success status
   */
  const signInWithEmail = async (email: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await nextAuthSignIn("email", {
        email,
        redirect: false,
        callbackUrl: "/",
      });

      if (!result?.ok) {
        setError({
          type: AuthErrorType.UNKNOWN_ERROR,
          message: result?.error || "Failed to send email",
        });
        return { success: false, error: result?.error };
      }

      return { success: true };
    } catch (err) {
      console.error("Email sign-in error:", err);
      setError({
        type: AuthErrorType.UNKNOWN_ERROR,
        message: "An unexpected error occurred during email sign-in",
      });
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Sign out the current user
   */
  const signOut = async () => {
    setIsLoading(true);
    try {
      await nextAuthSignOut({ callbackUrl: "/" });
    } catch (err) {
      console.error("Sign out error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Reset authentication error
   */
  const resetError = () => {
    setError(null);
  };

  return {
    user,
    isAuthenticated,
    isLoading: isLoading || isSessionLoading,
    error,
    signInWithCognito,
    registerWithCognito,
    signInWithProvider,
    signInWithEmail,
    signOut,
    resetError,
  };
}
