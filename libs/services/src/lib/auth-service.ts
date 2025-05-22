import { 
  CognitoIdentityProviderClient, 
  InitiateAuthCommand,
  SignUpCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
  AdminInitiateAuthCommand,
  ResendConfirmationCodeCommand,
  GlobalSignOutCommand,
  GetUserCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { AuthError, AuthProvider, AuthResponse, User } from "@a1c/types";

// AWS Cognito configuration
const REGION = process.env["NEXT_PUBLIC_AWS_REGION"] || 'us-east-1';
const USER_POOL_ID = process.env["NEXT_PUBLIC_COGNITO_USER_POOL_ID"] || '';
const CLIENT_ID = process.env["NEXT_PUBLIC_COGNITO_CLIENT_ID"] || '';

// Initialize the Cognito client
const cognitoClient = new CognitoIdentityProviderClient({ region: REGION });

/**
 * Register a new user with email and password
 */
export async function registerUser(email: string, password: string, name?: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
        ...(name ? [{
          Name: 'name',
          Value: name,
        }] : []),
      ],
    };

    const command = new SignUpCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      redirectUrl: '/verify',
    };
  } catch (error) {
    console.error('Error registering user:', error);
    return {
      success: false,
      error: {
        code: 'REGISTRATION_FAILED',
        message: (error as Error).message || 'Failed to register user',
      },
    };
  }
}

/**
 * Verify a user's email with confirmation code
 */
export async function verifyUser(email: string, code: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      Username: email,
      ConfirmationCode: code,
    };

    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      redirectUrl: '/login',
    };
  } catch (error) {
    console.error('Error verifying user:', error);
    return {
      success: false,
      error: {
        code: 'VERIFICATION_FAILED',
        message: (error as Error).message || 'Failed to verify user',
      },
    };
  }
}

/**
 * Resend verification code
 */
export async function resendVerificationCode(email: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      Username: email,
    };

    const command = new ResendConfirmationCodeCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error resending verification code:', error);
    return {
      success: false,
      error: {
        code: 'RESEND_CODE_FAILED',
        message: (error as Error).message || 'Failed to resend verification code',
      },
    };
  }
}

/**
 * Login with email and password
 */
export async function loginWithPassword(email: string, password: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    const command = new InitiateAuthCommand(params as never);
    const response = await cognitoClient.send(command);

    if (!response.AuthenticationResult) {
      throw new Error('Authentication failed');
    }

    const user: User = {
      id: email, // Using email as ID for now
      email: email,
    };

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error('Error logging in:', error);
    return {
      success: false,
      error: {
        code: 'LOGIN_FAILED',
        message: (error as Error).message || 'Failed to login',
      },
    };
  }
}

/**
 * Logout the current user
 */
export async function logout(accessToken: string): Promise<AuthResponse> {
  try {
    const params = {
      AccessToken: accessToken,
    };

    const command = new GlobalSignOutCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      redirectUrl: '/login',
    };
  } catch (error) {
    console.error('Error logging out:', error);
    return {
      success: false,
      error: {
        code: 'LOGOUT_FAILED',
        message: (error as Error).message || 'Failed to logout',
      },
    };
  }
}

/**
 * Initiate forgot password flow
 */
export async function forgotPassword(email: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      Username: email,
    };

    const command = new ForgotPasswordCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      redirectUrl: '/reset-password',
    };
  } catch (error) {
    console.error('Error initiating forgot password:', error);
    return {
      success: false,
      error: {
        code: 'FORGOT_PASSWORD_FAILED',
        message: (error as Error).message || 'Failed to initiate password reset',
      },
    };
  }
}

/**
 * Complete forgot password flow with confirmation code
 */
export async function resetPassword(email: string, code: string, newPassword: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      Username: email,
      ConfirmationCode: code,
      Password: newPassword,
    };

    const command = new ConfirmForgotPasswordCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      redirectUrl: '/login',
    };
  } catch (error) {
    console.error('Error resetting password:', error);
    return {
      success: false,
      error: {
        code: 'RESET_PASSWORD_FAILED',
        message: (error as Error).message || 'Failed to reset password',
      },
    };
  }
}

/**
 * Create a user with magic link (admin creates user without password)
 */
export async function createUserForMagicLink(email: string): Promise<AuthResponse> {
  try {
    // First, check if user already exists
    // If not, create a new user
    const params = {
      UserPoolId: USER_POOL_ID,
      Username: email,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
        {
          Name: 'email_verified',
          Value: 'true', // Auto-verify email for magic link users
        },
      ],
      MessageAction: 'SUPPRESS', // Don't send welcome email
    };

    const command = new AdminCreateUserCommand(params as never);
    await cognitoClient.send(command);

    // Generate a temporary password for the magic link
    const tempPassword = generateRandomPassword();
    
    // Set the temporary password
    const setPasswordParams = {
      UserPoolId: USER_POOL_ID,
      Username: email,
      Password: tempPassword,
      Permanent: false,
    };

    const setPasswordCommand = new AdminSetUserPasswordCommand(setPasswordParams);
    await cognitoClient.send(setPasswordCommand);

    return {
      success: true,
      // Return the temp password which will be used to generate the magic link
      // In a real implementation, this would be encoded in a secure token
      user: {
        id: email,
        email,
        emailVerified: true,
      },
    };
  } catch (error) {
    console.error('Error creating user for magic link:', error);
    return {
      success: false,
      error: {
        code: 'MAGIC_LINK_CREATION_FAILED',
        message: (error as Error).message || 'Failed to create magic link',
      },
    };
  }
}

/**
 * Authenticate with magic link token
 */
export async function authenticateWithMagicLink(email: string, token: string): Promise<AuthResponse> {
  try {
    // In a real implementation, we would validate the token
    // Here we're using the token as a temporary password
    const params = {
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID,
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: email,
        PASSWORD: token,
      },
    };

    const command = new AdminInitiateAuthCommand(params as never);
    const response = await cognitoClient.send(command);

    if (!response.AuthenticationResult) {
      throw new Error('Magic link authentication failed');
    }

    // After successful login, set a permanent password or use refresh tokens
    // for subsequent authentications

    return {
      success: true,
      user: {
        id: email,
        email,
        emailVerified: true,
      },
    };
  } catch (error) {
    console.error('Error authenticating with magic link:', error);
    return {
      success: false,
      error: {
        code: 'MAGIC_LINK_AUTH_FAILED',
        message: (error as Error).message || 'Failed to authenticate with magic link',
      },
    };
  }
}

/**
 * Get current user information
 */
export async function getCurrentUser(accessToken: string): Promise<AuthResponse> {
  try {
    const params = {
      AccessToken: accessToken,
    };

    const command = new GetUserCommand(params);
    const response = await cognitoClient.send(command);

    if (!response.UserAttributes) {
      throw new Error('Failed to get user attributes');
    }

    const attributes = response.UserAttributes.reduce((acc, attr) => {
      if (attr.Name && attr.Value) {
        acc[attr.Name] = attr.Value;
      }
      return acc;
    }, {} as Record<string, string>);

    const user: User = {
      id: attributes["sub"] || response.Username || '',
      email: attributes["email"] || '',
      name: attributes["name"],
      emailVerified: attributes["email_verified"] === 'true',
    };

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return {
      success: false,
      error: {
        code: 'GET_USER_FAILED',
        message: (error as Error).message || 'Failed to get user information',
      },
    };
  }
}

// Helper function to generate a random password for magic links
function generateRandomPassword(): string {
  const length = 16;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  return password;
}

// Social login helpers - these would integrate with NextAuth.js
export const socialLoginProviders = {
  google: {
    id: 'google',
    name: 'Google',
    type: 'oauth',
  },
  apple: {
    id: 'apple',
    name: 'Apple',
    type: 'oauth',
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    type: 'oauth',
  },
};

// WebAuthn/Passkey helpers
// Note: In a real implementation, these would use the @simplewebauthn/server package
// and would be more complex to handle the WebAuthn protocol

export async function registerPasskey(userId: string, credential: any): Promise<AuthResponse> {
  try {
    // This is a placeholder for the actual WebAuthn registration
    // In a real implementation, this would:
    // 1. Verify the attestation
    // 2. Store the credential in a database
    // 3. Associate it with the user
    
    console.log('Registering passkey for user:', userId);
    console.log('Credential:', credential);
    
    return {
      success: true,
    };
  } catch (error) {
    console.error('Error registering passkey:', error);
    return {
      success: false,
      error: {
        code: 'PASSKEY_REGISTRATION_FAILED',
        message: (error as Error).message || 'Failed to register passkey',
      },
    };
  }
}

export async function authenticateWithPasskey(credential: any): Promise<AuthResponse> {
  try {
    // This is a placeholder for the actual WebAuthn authentication
    // In a real implementation, this would:
    // 1. Verify the assertion
    // 2. Look up the user associated with the credential
    // 3. Return the user information
    
    console.log('Authenticating with passkey:', credential);
    
    // Mock user for demonstration
    const user: User = {
      id: 'passkey-user-id',
      email: 'passkey-user@example.com',
      emailVerified: true,
    };
    
    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error('Error authenticating with passkey:', error);
    return {
      success: false,
      error: {
        code: 'PASSKEY_AUTH_FAILED',
        message: (error as Error).message || 'Failed to authenticate with passkey',
      },
    };
  }
}