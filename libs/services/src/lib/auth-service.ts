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
  GetUserCommand,
  AdminGetUserCommand,
  AuthFlowType,
  MessageActionType
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
export async function register(email: string, password: string): Promise<AuthResponse> {
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
      ],
    };

    const command = new SignUpCommand(params);
    await cognitoClient.send(command);

    return {
      success: true,
      user: {
        id: email,
        email,
        emailVerified: false,
      },
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
 * Confirm a user's registration with the verification code
 */
export async function confirmRegistration(email: string, code: string): Promise<AuthResponse> {
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
      user: {
        id: email,
        email,
        emailVerified: true,
      },
    };
  } catch (error) {
    console.error('Error confirming registration:', error);
    return {
      success: false,
      error: {
        code: 'CONFIRMATION_FAILED',
        message: (error as Error).message || 'Failed to confirm registration',
      },
    };
  }
}

/**
 * Resend the verification code to the user's email
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
 * Login a user with email and password
 */
export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    const params = {
      ClientId: CLIENT_ID,
      AuthFlow: 'USER_PASSWORD_AUTH' as AuthFlowType,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    const command = new InitiateAuthCommand(params);
    const response = await cognitoClient.send(command);

    const idToken = response.AuthenticationResult?.IdToken;
    const accessToken = response.AuthenticationResult?.AccessToken;
    const refreshToken = response.AuthenticationResult?.RefreshToken;

    if (!idToken || !accessToken || !refreshToken) {
      throw new Error('Authentication failed: Missing tokens');
    }

    // Get user information
    const userParams = {
      AccessToken: accessToken,
    };

    const userCommand = new GetUserCommand(userParams);
    const userResponse = await cognitoClient.send(userCommand);

    const userId = userResponse.Username || email;
    const userAttributes = userResponse.UserAttributes || [];
    
    const userEmail = userAttributes.find(attr => attr.Name === 'email')?.Value || email;
    const emailVerified = userAttributes.find(attr => attr.Name === 'email_verified')?.Value === 'true';
    const name = userAttributes.find(attr => attr.Name === 'name')?.Value;

    const user: User = {
      id: userId,
      email: userEmail,
      emailVerified,
      name,
    };

    return {
      success: true,
      user,
      tokens: {
        idToken,
        accessToken,
        refreshToken,
      },
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
 * Logout a user
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
 * Request a password reset for a user
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
    };
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return {
      success: false,
      error: {
        code: 'PASSWORD_RESET_REQUEST_FAILED',
        message: (error as Error).message || 'Failed to request password reset',
      },
    };
  }
}

/**
 * Confirm a password reset with the verification code and new password
 */
export async function confirmForgotPassword(email: string, code: string, newPassword: string): Promise<AuthResponse> {
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
    };
  } catch (error) {
    console.error('Error confirming password reset:', error);
    return {
      success: false,
      error: {
        code: 'PASSWORD_RESET_CONFIRMATION_FAILED',
        message: (error as Error).message || 'Failed to confirm password reset',
      },
    };
  }
}

/**
 * Get the current user information
 */
export async function getCurrentUser(accessToken: string): Promise<AuthResponse> {
  try {
    const params = {
      AccessToken: accessToken,
    };

    const command = new GetUserCommand(params);
    const response = await cognitoClient.send(command);

    const userId = response.Username || '';
    const userAttributes = response.UserAttributes || [];
    
    const email = userAttributes.find(attr => attr.Name === 'email')?.Value || '';
    const emailVerified = userAttributes.find(attr => attr.Name === 'email_verified')?.Value === 'true';
    const name = userAttributes.find(attr => attr.Name === 'name')?.Value;

    const user: User = {
      id: userId,
      email,
      emailVerified,
      name,
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
};

/**
 * Create a user with magic link (admin creates user without password)
 */
export async function createUserForMagicLink(email: string): Promise<AuthResponse> {
  try {
    // First, check if user already exists
    try {
      const getUserParams = {
        UserPoolId: USER_POOL_ID,
        Username: email,
      };
      const getUserCommand = new AdminGetUserCommand(getUserParams);
      await cognitoClient.send(getUserCommand);
      // User exists, return success without creating a new user
      return {
        success: true,
        user: {
          id: email,
          email,
          emailVerified: true,
        },
      };
    } catch (error) {
      // User doesn't exist, proceed with user creation
    }

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
      MessageAction: 'SUPPRESS' as MessageActionType, // Don't send welcome email
    };

    const command = new AdminCreateUserCommand(params);
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
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH' as AuthFlowType,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: token,
      },
    };

    const command = new AdminInitiateAuthCommand(params);
    const response = await cognitoClient.send(command);

    const idToken = response.AuthenticationResult?.IdToken;
    const accessToken = response.AuthenticationResult?.AccessToken;
    const refreshToken = response.AuthenticationResult?.RefreshToken;

    if (!idToken || !accessToken || !refreshToken) {
      throw new Error('Authentication failed: Missing tokens');
    }

    // Get user information
    const userParams = {
      AccessToken: accessToken,
    };

    const userCommand = new GetUserCommand(userParams);
    const userResponse = await cognitoClient.send(userCommand);

    const userId = userResponse.Username || email;
    const userAttributes = userResponse.UserAttributes || [];
    
    const userEmail = userAttributes.find(attr => attr.Name === 'email')?.Value || email;
    const emailVerified = userAttributes.find(attr => attr.Name === 'email_verified')?.Value === 'true';
    const name = userAttributes.find(attr => attr.Name === 'name')?.Value;

    const user: User = {
      id: userId,
      email: userEmail,
      emailVerified,
      name,
    };

    return {
      success: true,
      user,
      tokens: {
        idToken,
        accessToken,
        refreshToken,
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

// WebAuthn (passkey) authentication
// Note: This is a simplified implementation for demonstration purposes
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
