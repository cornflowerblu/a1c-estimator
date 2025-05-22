import { Auth } from 'aws-amplify';

/**
 * Authentication service for handling user authentication with AWS Cognito
 * This service provides methods for user authentication, registration, and session management
 */
export class AuthService {
  /**
   * Initialize the Auth service with configuration
   * This should be called once at application startup
   */
  static configure() {
    Auth.configure({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
      oauth: {
        domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
        scope: ['email', 'profile', 'openid'],
        redirectSignIn: process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN,
        redirectSignOut: process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT,
        responseType: 'code',
      },
    });
  }

  /**
   * Sign in with email and password
   * @param email User's email
   * @param password User's password
   * @returns Promise resolving to the authenticated user
   */
  static async signIn(email: string, password: string) {
    try {
      const user = await Auth.signIn(email, password);
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }

  /**
   * Sign up a new user
   * @param email User's email
   * @param password User's password
   * @param attributes Additional user attributes
   * @returns Promise resolving to the sign up result
   */
  static async signUp(email: string, password: string, attributes: Record<string, string> = {}) {
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          ...attributes,
        },
      });
      return result;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }

  /**
   * Confirm user sign up with verification code
   * @param email User's email
   * @param code Verification code sent to user's email
   * @returns Promise resolving to confirmation result
   */
  static async confirmSignUp(email: string, code: string) {
    try {
      return await Auth.confirmSignUp(email, code);
    } catch (error) {
      console.error('Error confirming sign up:', error);
      throw error;
    }
  }

  /**
   * Sign out the current user
   * @returns Promise resolving when sign out is complete
   */
  static async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  /**
   * Get the current authenticated user
   * @returns Promise resolving to the current user
   */
  static async getCurrentUser() {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  /**
   * Get the current session
   * @returns Promise resolving to the current session
   */
  static async getCurrentSession() {
    try {
      return await Auth.currentSession();
    } catch (error) {
      console.error('Error getting current session:', error);
      return null;
    }
  }

  /**
   * Send a password reset code to the user's email
   * @param email User's email
   * @returns Promise resolving when code is sent
   */
  static async forgotPassword(email: string) {
    try {
      return await Auth.forgotPassword(email);
    } catch (error) {
      console.error('Error initiating password reset:', error);
      throw error;
    }
  }

  /**
   * Complete the password reset process
   * @param email User's email
   * @param code Verification code sent to user's email
   * @param newPassword New password
   * @returns Promise resolving when password is reset
   */
  static async confirmForgotPassword(email: string, code: string, newPassword: string) {
    try {
      return await Auth.forgotPasswordSubmit(email, code, newPassword);
    } catch (error) {
      console.error('Error confirming password reset:', error);
      throw error;
    }
  }

  /**
   * Initiate magic link authentication
   * This is a custom implementation using Cognito's forgotPassword flow
   * @param email User's email
   * @returns Promise resolving when magic link is sent
   */
  static async sendMagicLink(email: string) {
    try {
      // First check if the user exists
      try {
        await Auth.signIn(email, 'placeholder-password');
      } catch (e) {
        // If user doesn't exist, create one with a random password
        if (e.code === 'UserNotFoundException') {
          const password = Math.random().toString(36).slice(-8);
          await this.signUp(email, password);
        }
      }
      
      // Send the password reset email which will act as our magic link
      return await this.forgotPassword(email);
    } catch (error) {
      console.error('Error sending magic link:', error);
      throw error;
    }
  }

  /**
   * Complete magic link authentication
   * @param email User's email
   * @param code Code from the magic link
   * @returns Promise resolving when authentication is complete
   */
  static async completeMagicLinkAuth(email: string, code: string) {
    try {
      // Generate a new random password
      const newPassword = Math.random().toString(36).slice(-12);
      
      // Complete the password reset
      await this.confirmForgotPassword(email, code, newPassword);
      
      // Sign in with the new password
      return await this.signIn(email, newPassword);
    } catch (error) {
      console.error('Error completing magic link authentication:', error);
      throw error;
    }
  }

  /**
   * Sign in with a social provider
   * @param provider Social provider ('Google', 'Facebook', 'Apple')
   * @returns Promise that will redirect to the social provider's login page
   */
  static async federatedSignIn(provider: 'Google' | 'Facebook' | 'Apple') {
    try {
      return await Auth.federatedSignIn({
        provider: provider as any,
      });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      throw error;
    }
  }
}