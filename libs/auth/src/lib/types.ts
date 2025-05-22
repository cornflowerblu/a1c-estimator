import { DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

// Extend the built-in JWT types
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}

// Define user role types
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface AuthUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: UserRole;
  username?: string; // Added for Cognito
}

/**
 * Authentication error types
 */
export enum AuthErrorType {
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  EMAIL_NOT_VERIFIED = "EMAIL_NOT_VERIFIED",
  USERNAME_EXISTS = "USERNAME_EXISTS",
  EMAIL_EXISTS = "EMAIL_EXISTS",
  PASSWORD_MISMATCH = "PASSWORD_MISMATCH",
  WEAK_PASSWORD = "WEAK_PASSWORD",
  NETWORK_ERROR = "NETWORK_ERROR",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface AuthError {
  type: AuthErrorType;
  message: string;
}

/**
 * Cognito specific types
 */
export interface CognitoUser extends AuthUser {
  username: string;
  // Additional Cognito-specific fields can be added here
}

export interface CognitoAuthResult {
  user: CognitoUser;
  error?: AuthError;
}

export interface CognitoRegisterParams {
  username: string;
  email: string;
  password: string;
  name?: string;
}

export interface CognitoSignInParams {
  usernameOrEmail: string;
  password: string;
}

export interface CognitoResetPasswordParams {
  usernameOrEmail: string;
}

export interface CognitoConfirmResetPasswordParams {
  usernameOrEmail: string;
  code: string;
  newPassword: string;
}

/**
 * Auth configuration types
 */
export interface AuthConfig {
  useMockAuth: boolean;
}
