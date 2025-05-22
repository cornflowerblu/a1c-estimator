import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '@a1c/types';

// Mock user data for testing
const mockUsers: User[] = [
  {
    id: '1',
    email: 'test@example.com',
    name: 'Test User',
    externalId: 'mock-external-id-1',
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    externalId: 'mock-external-id-2',
  },
];

// Global configuration for authentication
let useMockAuth = true;

/**
 * Configure the authentication service
 * @param useMock - Whether to use mock authentication or real Cognito
 */
export function configureAuth(useMock: boolean): void {
  useMockAuth = useMock;
  console.log(`Auth configured to use ${useMock ? 'mock' : 'real'} authentication`);
}

/**
 * Get the current authentication configuration
 * @returns Whether mock authentication is being used
 */
export function getAuthConfig(): { useMock: boolean } {
  return { useMock: useMockAuth };
}

/**
 * Register a new user
 * @param credentials - User registration credentials
 * @returns Authentication response with user data if successful
 */
export async function register(credentials: RegisterCredentials): Promise<AuthResponse> {
  try {
    if (useMockAuth) {
      // Check if user already exists in mock data
      const existingUser = mockUsers.find(user => user.email === credentials.email);
      if (existingUser) {
        return {
          user: null,
          isAuthenticated: false,
          error: 'User with this email already exists',
        };
      }

      // Create a new mock user
      const newUser: User = {
        id: `${mockUsers.length + 1}`,
        email: credentials.email,
        name: credentials.name,
        externalId: `mock-external-id-${mockUsers.length + 1}`,
      };

      // In a real implementation, we would save this user to a database
      // For mock purposes, we'll just log it
      console.log('Registered new mock user:', newUser);

      return {
        user: newUser,
        isAuthenticated: true,
      };
    } else {
      // Real Cognito implementation would go here
      /* 
      COGNITO IMPLEMENTATION NOTES:
      
      To implement real AWS Cognito authentication:
      
      1. Install the AWS Amplify library:
         npm install aws-amplify
      
      2. Configure Amplify with your Cognito details:
         import { Amplify } from 'aws-amplify';
         Amplify.configure({
           Auth: {
             region: 'YOUR_REGION',
             userPoolId: 'YOUR_USER_POOL_ID',
             userPoolWebClientId: 'YOUR_CLIENT_ID',
           }
         });
      
      3. Use Amplify Auth for registration:
         import { Auth } from 'aws-amplify';
         const result = await Auth.signUp({
           username: credentials.email,
           password: credentials.password,
           attributes: {
             email: credentials.email,
             name: credentials.name || '',
           }
         });
      
      4. Handle confirmation if required:
         await Auth.confirmSignUp(credentials.email, confirmationCode);
      */
      
      throw new Error('Real Cognito authentication not implemented yet');
    }
  } catch (error) {
    console.error('Registration error:', error);
    return {
      user: null,
      isAuthenticated: false,
      error: error instanceof Error ? error.message : 'Unknown registration error',
    };
  }
}

/**
 * Log in a user
 * @param credentials - User login credentials
 * @returns Authentication response with user data if successful
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    if (useMockAuth) {
      // Find user in mock data
      const user = mockUsers.find(user => user.email === credentials.email);
      
      // In mock mode, we'll accept any password for existing mock users
      if (user) {
        return {
          user,
          isAuthenticated: true,
        };
      } else {
        return {
          user: null,
          isAuthenticated: false,
          error: 'Invalid email or password',
        };
      }
    } else {
      // Real Cognito implementation would go here
      /* 
      COGNITO IMPLEMENTATION NOTES:
      
      To implement real AWS Cognito authentication:
      
      1. Use Amplify Auth for sign in:
         import { Auth } from 'aws-amplify';
         const cognitoUser = await Auth.signIn(credentials.email, credentials.password);
      
      2. Get user attributes and create a user object:
         const userAttributes = await Auth.userAttributes(cognitoUser);
         const user = {
           id: userAttributes.find(attr => attr.Name === 'sub')?.Value || '',
           email: credentials.email,
           name: userAttributes.find(attr => attr.Name === 'name')?.Value,
           externalId: userAttributes.find(attr => attr.Name === 'sub')?.Value || '',
         };
      
      3. Return the authenticated user
      */
      
      throw new Error('Real Cognito authentication not implemented yet');
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      user: null,
      isAuthenticated: false,
      error: error instanceof Error ? error.message : 'Unknown login error',
    };
  }
}

/**
 * Log out the current user
 * @returns Success status
 */
export async function logout(): Promise<{ success: boolean; error?: string }> {
  try {
    if (useMockAuth) {
      // In mock mode, just return success
      console.log('Mock user logged out');
      return { success: true };
    } else {
      // Real Cognito implementation would go here
      /* 
      COGNITO IMPLEMENTATION NOTES:
      
      To implement real AWS Cognito logout:
      
      1. Use Amplify Auth for sign out:
         import { Auth } from 'aws-amplify';
         await Auth.signOut();
      */
      
      throw new Error('Real Cognito authentication not implemented yet');
    }
  } catch (error) {
    console.error('Logout error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown logout error',
    };
  }
}

/**
 * Get the current authenticated user
 * @returns Authentication response with user data if authenticated
 */
export async function getCurrentUser(): Promise<AuthResponse> {
  try {
    if (useMockAuth) {
      // In a real app, we would check for a session token
      // For mock purposes, we'll just return not authenticated
      return {
        user: null,
        isAuthenticated: false,
      };
    } else {
      // Real Cognito implementation would go here
      /* 
      COGNITO IMPLEMENTATION NOTES:
      
      To implement real AWS Cognito current user check:
      
      1. Use Amplify Auth to get current authenticated user:
         import { Auth } from 'aws-amplify';
         const cognitoUser = await Auth.currentAuthenticatedUser();
      
      2. Get user attributes and create a user object:
         const userAttributes = await Auth.userAttributes(cognitoUser);
         const user = {
           id: userAttributes.find(attr => attr.Name === 'sub')?.Value || '',
           email: cognitoUser.attributes.email,
           name: userAttributes.find(attr => attr.Name === 'name')?.Value,
           externalId: userAttributes.find(attr => attr.Name === 'sub')?.Value || '',
         };
      
      3. Return the authenticated user
      */
      
      throw new Error('Real Cognito authentication not implemented yet');
    }
  } catch (error) {
    // If error is not authenticated, return not authenticated without error
    if (error instanceof Error && error.message === 'not authenticated') {
      return {
        user: null,
        isAuthenticated: false,
      };
    }
    
    console.error('Get current user error:', error);
    return {
      user: null,
      isAuthenticated: false,
      error: error instanceof Error ? error.message : 'Unknown error getting current user',
    };
  }
}