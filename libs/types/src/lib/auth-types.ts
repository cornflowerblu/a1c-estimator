export interface User {
  id: string;
  email: string;
  name?: string;
  externalId: string; // ID from Cognito
}

export interface AuthResponse {
  user: User | null;
  isAuthenticated: boolean;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name?: string;
}

export interface AuthConfig {
  useMock: boolean;
}