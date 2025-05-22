/**
 * Authentication Service
 * 
 * This service provides authentication functionality using AWS Cognito.
 * Currently implemented with mock data for development purposes.
 * 
 * IMPORTANT: To switch to real Cognito authentication, update the AUTH_MODE
 * in auth.config.ts from 'mock' to 'cognito' and ensure AWS credentials are properly configured.
 */

import { AUTH_MODE, isUsingRealCognito, getCognitoConnectionInstructions } from './auth.config';

// Mock user data for development
const MOCK_USERS = [
  {
    email: 'test@example.com',
    password: 'Password123!',
    name: 'Test User',
    id: 'mock-user-id-1',
    externalId: 'cognito-external-id-1',
  },
  {
    email: 'admin@example.com',
    password: 'Admin123!',
    name: 'Admin User',
    id: 'mock-user-id-2',
    externalId: 'cognito-external-id-2',
  },
];

// Types for authentication
export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  externalId: string;
}

export interface AuthResponse {
  user?: AuthUser;
  token?: string;
  error?: string;
  success: boolean;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

/**
 * Authentication service that provides methods for user authentication
 */
export class AuthService {
  private currentUser: AuthUser | null = null;
  private mockToken: string | null = null;

  /**
   * Register a new user
   * 
   * @param credentials - User credentials (email and password)
   * @param name - User's name (optional)
   * @returns AuthResponse with success status and user data if successful
   */
  async register(
    credentials: AuthCredentials,
    name?: string
  ): Promise<AuthResponse> {
    if (isUsingRealCognito()) {
      return this.registerWithCognito(credentials, name);
    } else {
      return this.mockRegister(credentials, name);
    }
  }

  /**
   * Log in an existing user
   * 
   * @param credentials - User credentials (email and password)
   * @returns AuthResponse with success status and user data if successful
   */
  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    if (isUsingRealCognito()) {
      return this.loginWithCognito(credentials);
    } else {
      return this.mockLogin(credentials);
    }
  }

  /**
   * Log out the current user
   * 
   * @returns AuthResponse with success status
   */
  async logout(): Promise<AuthResponse> {
    if (isUsingRealCognito()) {
      return this.logoutFromCognito();
    } else {
      return this.mockLogout();
    }
  }

  /**
   * Get the current authenticated user
   * 
   * @returns AuthResponse with user data if authenticated
   */
  async getCurrentUser(): Promise<AuthResponse> {
    if (isUsingRealCognito()) {
      return this.getCurrentUserFromCognito();
    } else {
      return this.mockGetCurrentUser();
    }
  }

  /**
   * Check if a user is currently authenticated
   * 
   * @returns boolean indicating if a user is authenticated
   */
  async isAuthenticated(): Promise<boolean> {
    if (isUsingRealCognito()) {
      const response = await this.getCurrentUserFromCognito();
      return response.success && !!response.user;
    } else {
      return this.currentUser !== null && this.mockToken !== null;
    }
  }

  // ========== MOCK IMPLEMENTATIONS ==========

  /**
   * Mock implementation of user registration
   * 
   * @param credentials - User credentials
   * @param name - User's name
   * @returns AuthResponse with mock user data
   */
  private async mockRegister(
    credentials: AuthCredentials,
    name?: string
  ): Promise<AuthResponse> {
    // Check if user already exists
    const existingUser = MOCK_USERS.find(
      (user) => user.email === credentials.email
    );
    
    if (existingUser) {
      return {
        success: false,
        error: 'User with this email already exists',
      };
    }

    // Create a new mock user
    const newUser: AuthUser = {
      id: `mock-user-id-${Date.now()}`,
      email: credentials.email,
      name: name || '',
      externalId: `cognito-external-id-${Date.now()}`,
    };

    // In a real implementation, we would save this user to a database
    // For mock purposes, we'll just set it as the current user
    this.currentUser = newUser;
    this.mockToken = `mock-token-${Date.now()}`;

    return {
      success: true,
      user: newUser,
      token: this.mockToken,
    };
  }

  /**
   * Mock implementation of user login
   * 
   * @param credentials - User credentials
   * @returns AuthResponse with mock user data
   */
  private async mockLogin(credentials: AuthCredentials): Promise<AuthResponse> {
    // Find user with matching credentials
    const user = MOCK_USERS.find(
      (user) => 
        user.email === credentials.email && 
        user.password === credentials.password
    );

    if (!user) {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }

    // Set as current user
    this.currentUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      externalId: user.externalId,
    };
    
    this.mockToken = `mock-token-${Date.now()}`;

    return {
      success: true,
      user: this.currentUser,
      token: this.mockToken,
    };
  }

  /**
   * Mock implementation of user logout
   * 
   * @returns AuthResponse with success status
   */
  private async mockLogout(): Promise<AuthResponse> {
    this.currentUser = null;
    this.mockToken = null;

    return {
      success: true,
    };
  }

  /**
   * Mock implementation to get current user
   * 
   * @returns AuthResponse with current user data
   */
  private async mockGetCurrentUser(): Promise<AuthResponse> {
    if (!this.currentUser || !this.mockToken) {
      return {
        success: false,
        error: 'No authenticated user',
      };
    }

    return {
      success: true,
      user: this.currentUser,
      token: this.mockToken,
    };
  }

  // ========== REAL COGNITO IMPLEMENTATIONS ==========

  /**
   * Register a new user with AWS Cognito
   * 
   * @param credentials - User credentials
   * @param name - User's name
   * @returns AuthResponse with user data
   */
  private async registerWithCognito(
    credentials: AuthCredentials,
    name?: string
  ): Promise<AuthResponse> {
    try {
      // TODO: Implement real Cognito registration
      // 1. Import AWS Amplify or AWS SDK
      // 2. Configure with your Cognito User Pool details
      // 3. Call Cognito signUp API
      // 4. Handle confirmation if required
      
      // Example implementation with AWS Amplify:
      /*
      import { Auth } from 'aws-amplify';
      
      const result = await Auth.signUp({
        username: credentials.email,
        password: credentials.password,
        attributes: {
          email: credentials.email,
          name: name || '',
        }
      });
      
      return {
        success: true,
        user: {
          id: result.userSub,
          email: credentials.email,
          name: name,
          externalId: result.userSub,
        }
      };
      */
      
      console.log(getCognitoConnectionInstructions());
      throw new Error('Real Cognito authentication not implemented yet. See console for setup instructions.');
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error during registration',
      };
    }
  }

  /**
   * Log in a user with AWS Cognito
   * 
   * @param credentials - User credentials
   * @returns AuthResponse with user data
   */
  private async loginWithCognito(credentials: AuthCredentials): Promise<AuthResponse> {
    try {
      // TODO: Implement real Cognito login
      // 1. Import AWS Amplify or AWS SDK
      // 2. Configure with your Cognito User Pool details
      // 3. Call Cognito signIn API
      
      // Example implementation with AWS Amplify:
      /*
      import { Auth } from 'aws-amplify';
      
      const user = await Auth.signIn(credentials.email, credentials.password);
      
      return {
        success: true,
        user: {
          id: user.attributes.sub,
          email: user.attributes.email,
          name: user.attributes.name,
          externalId: user.attributes.sub,
        },
        token: user.signInUserSession.accessToken.jwtToken,
      };
      */
      
      console.log(getCognitoConnectionInstructions());
      throw new Error('Real Cognito authentication not implemented yet. See console for setup instructions.');
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error during login',
      };
    }
  }

  /**
   * Log out a user from AWS Cognito
   * 
   * @returns AuthResponse with success status
   */
  private async logoutFromCognito(): Promise<AuthResponse> {
    try {
      // TODO: Implement real Cognito logout
      // 1. Import AWS Amplify or AWS SDK
      // 2. Call Cognito signOut API
      
      // Example implementation with AWS Amplify:
      /*
      import { Auth } from 'aws-amplify';
      
      await Auth.signOut();
      
      return {
        success: true,
      };
      */
      
      console.log(getCognitoConnectionInstructions());
      throw new Error('Real Cognito authentication not implemented yet. See console for setup instructions.');
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error during logout',
      };
    }
  }

  /**
   * Get current user from AWS Cognito
   * 
   * @returns AuthResponse with user data
   */
  private async getCurrentUserFromCognito(): Promise<AuthResponse> {
    try {
      // TODO: Implement real Cognito getCurrentUser
      // 1. Import AWS Amplify or AWS SDK
      // 2. Call Cognito currentAuthenticatedUser API
      
      // Example implementation with AWS Amplify:
      /*
      import { Auth } from 'aws-amplify';
      
      const user = await Auth.currentAuthenticatedUser();
      
      return {
        success: true,
        user: {
          id: user.attributes.sub,
          email: user.attributes.email,
          name: user.attributes.name,
          externalId: user.attributes.sub,
        },
        token: user.signInUserSession.accessToken.jwtToken,
      };
      */
      
      console.log(getCognitoConnectionInstructions());
      throw new Error('Real Cognito authentication not implemented yet. See console for setup instructions.');
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error getting current user',
      };
    }
  }
}

// Export a singleton instance of the AuthService
export const authService = new AuthService();