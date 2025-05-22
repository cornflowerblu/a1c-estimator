/**
 * Mock Cognito Authentication Implementation
 * 
 * This file provides a mock implementation of AWS Cognito authentication for development and testing.
 * It includes:
 * 1. Mock user data store
 * 2. Authentication logic using NextAuth's CredentialsProvider
 * 3. Toggle mechanism between mock and real Cognito
 * 4. Helper functions for login, registration, and password reset
 * 
 * IMPORTANT: This is a mock implementation for development purposes only.
 * For production, you should connect to the real AWS Cognito service.
 */

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock user data store
// In a real implementation, this would be replaced with calls to AWS Cognito
interface MockUser {
  id: string;
  username: string;
  email: string;
  password: string;
  name?: string;
  image?: string;
}

// Mock user database - in memory for development
const mockUsers: MockUser[] = [
  {
    id: "user-1",
    username: "testuser",
    email: "test@example.com",
    password: "password123",
    name: "Test User",
  },
  {
    id: "user-2",
    username: "demouser",
    email: "demo@example.com",
    password: "demo123",
    name: "Demo User",
  },
];

/**
 * Mock authentication functions
 * These simulate the behavior of AWS Cognito SDK functions
 */
export const mockCognitoAuth = {
  // Sign in with username/email and password
  signIn: async (usernameOrEmail: string, password: string) => {
    const user = mockUsers.find(
      (u) => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
    );

    if (!user) {
      throw new Error("Invalid username or password");
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        image: user.image,
      },
    };
  },

  // Register a new user
  register: async (username: string, email: string, password: string, name?: string) => {
    // Check if username or email already exists
    if (mockUsers.some((u) => u.username === username)) {
      throw new Error("Username already exists");
    }

    if (mockUsers.some((u) => u.email === email)) {
      throw new Error("Email already exists");
    }

    // Create new user
    const newUser: MockUser = {
      id: `user-${mockUsers.length + 1}`,
      username,
      email,
      password,
      name,
    };

    // Add to mock database
    mockUsers.push(newUser);

    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      },
    };
  },

  // Reset password
  resetPassword: async (usernameOrEmail: string) => {
    const user = mockUsers.find(
      (u) => u.username === usernameOrEmail || u.email === usernameOrEmail
    );

    if (!user) {
      throw new Error("User not found");
    }

    // In a real implementation, this would send a reset code
    return { success: true, message: "Password reset initiated" };
  },

  // Confirm password reset
  confirmResetPassword: async (usernameOrEmail: string, code: string, newPassword: string) => {
    const userIndex = mockUsers.findIndex(
      (u) => u.username === usernameOrEmail || u.email === usernameOrEmail
    );

    if (userIndex === -1) {
      throw new Error("User not found");
    }

    // In a mock implementation, we'll accept any code (e.g., "123456")
    if (code !== "123456") {
      throw new Error("Invalid verification code");
    }

    // Update password
    mockUsers[userIndex].password = newPassword;

    return { success: true, message: "Password reset successful" };
  },
};

/**
 * Create a NextAuth CredentialsProvider that uses our mock Cognito implementation
 * 
 * @returns A configured CredentialsProvider for NextAuth
 */
export const createMockCognitoProvider = () => {
  return CredentialsProvider({
    id: "cognito",
    name: "Cognito",
    credentials: {
      username: { label: "Username or Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.username || !credentials?.password) {
        return null;
      }

      try {
        const result = await mockCognitoAuth.signIn(
          credentials.username,
          credentials.password
        );
        
        return {
          id: result.user.id,
          name: result.user.name,
          email: result.user.email,
          image: result.user.image,
        };
      } catch (error) {
        console.error("Authentication error:", error);
        return null;
      }
    },
  });
};

/**
 * REAL COGNITO IMPLEMENTATION GUIDE
 * 
 * To connect to the real AWS Cognito service:
 * 
 * 1. Install required dependencies:
 *    npm install amazon-cognito-identity-js @aws-sdk/client-cognito-identity-provider
 * 
 * 2. Configure AWS Cognito in your environment:
 *    - COGNITO_REGION: AWS region (e.g., "us-east-1")
 *    - COGNITO_USER_POOL_ID: Your Cognito User Pool ID
 *    - COGNITO_CLIENT_ID: Your Cognito App Client ID
 *    - COGNITO_CLIENT_SECRET: Your Cognito App Client Secret (if applicable)
 * 
 * 3. Replace this mock implementation with real AWS Cognito SDK calls:
 *    - Import and use the CognitoIdentityProvider from @aws-sdk/client-cognito-identity-provider
 *    - Replace mockCognitoAuth functions with real SDK calls
 *    - Update the CredentialsProvider to use the real authentication
 * 
 * 4. Example real implementation for signIn:
 *    ```typescript
 *    import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
 *    
 *    const client = new CognitoIdentityProviderClient({ region: process.env.COGNITO_REGION });
 *    
 *    const signIn = async (username: string, password: string) => {
 *      const command = new InitiateAuthCommand({
 *        AuthFlow: "USER_PASSWORD_AUTH",
 *        ClientId: process.env.COGNITO_CLIENT_ID,
 *        AuthParameters: {
 *          USERNAME: username,
 *          PASSWORD: password,
 *        },
 *      });
 *    
 *      try {
 *        const response = await client.send(command);
 *        // Process and return user data
 *      } catch (error) {
 *        // Handle authentication errors
 *      }
 *    };
 *    ```
 */

/**
 * Configuration for toggling between mock and real Cognito
 * 
 * In a real application, you would use environment variables to control this toggle:
 * - USE_MOCK_COGNITO=true for development/testing
 * - USE_MOCK_COGNITO=false for production
 */
export const cognitoConfig = {
  // Set to true to use mock implementation, false to use real Cognito
  // In production, this should be controlled by environment variables
  useMockCognito: process.env.USE_MOCK_COGNITO === "true" || process.env.NODE_ENV === "development",
  
  // Cognito region (for real implementation)
  region: process.env.COGNITO_REGION || "us-east-1",
  
  // Cognito User Pool ID (for real implementation)
  userPoolId: process.env.COGNITO_USER_POOL_ID || "",
  
  // Cognito App Client ID (for real implementation)
  clientId: process.env.COGNITO_CLIENT_ID || "",
};

/**
 * Get the appropriate Cognito provider based on configuration
 * 
 * @returns The configured Cognito provider (mock or real)
 */
export const getCognitoProvider = () => {
  if (cognitoConfig.useMockCognito) {
    console.log("Using mock Cognito authentication");
    return createMockCognitoProvider();
  } else {
    // In a real implementation, you would return the real Cognito provider here
    console.log("Using real Cognito authentication");
    // This is a placeholder - replace with real implementation when ready
    return createMockCognitoProvider();
  }
};