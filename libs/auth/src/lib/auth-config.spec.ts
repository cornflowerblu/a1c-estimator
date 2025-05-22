import { authOptions } from './auth';
import { NextAuthOptions } from 'next-auth';

// Mock environment variables
const originalEnv = process.env;

describe('Authentication Configuration', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    
    // Set up mock environment variables for testing
    process.env['NEXT_PUBLIC_AWS_REGION'] = 'us-east-1';
    process.env['NEXT_PUBLIC_COGNITO_USER_POOL_ID'] = 'test-user-pool-id';
    process.env['NEXT_PUBLIC_COGNITO_CLIENT_ID'] = 'test-client-id';
    process.env['COGNITO_CLIENT_SECRET'] = 'test-client-secret';
    process.env['GOOGLE_CLIENT_ID'] = 'test-google-client-id';
    process.env['GOOGLE_CLIENT_SECRET'] = 'test-google-client-secret';
    process.env['APPLE_ID'] = 'test-apple-id';
    process.env['APPLE_TEAM_ID'] = 'test-apple-team-id';
    process.env['APPLE_PRIVATE_KEY'] = 'test-apple-private-key';
    process.env['APPLE_KEY_ID'] = 'test-apple-key-id';
    process.env['FACEBOOK_CLIENT_ID'] = 'test-facebook-client-id';
    process.env['FACEBOOK_CLIENT_SECRET'] = 'test-facebook-client-secret';
    process.env['EMAIL_SERVER_HOST'] = 'smtp.example.com';
    process.env['EMAIL_SERVER_PORT'] = '587';
    process.env['EMAIL_SERVER_USER'] = 'test-email-user';
    process.env['EMAIL_SERVER_PASSWORD'] = 'test-email-password';
    process.env['EMAIL_FROM'] = 'noreply@example.com';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('AWS Cognito Configuration', () => {
    it('should configure Cognito provider with environment variables', () => {
      // Import auth options after setting environment variables
      const { authOptions } = require('./auth');
      
      // Find the Cognito provider in the providers array
      const cognitoProvider = authOptions.providers.find(
        (provider: any) => provider.id === 'cognito'
      );
      
      expect(cognitoProvider).toBeDefined();
      expect(cognitoProvider.options.clientId).toBe('test-client-id');
      expect(cognitoProvider.options.clientSecret).toBe('test-client-secret');
      expect(cognitoProvider.options.issuer).toContain('test-user-pool-id');
    });

    it('should throw an error if required Cognito environment variables are missing', () => {
      // Remove required environment variables
      delete process.env['NEXT_PUBLIC_COGNITO_USER_POOL_ID'];
      delete process.env['NEXT_PUBLIC_COGNITO_CLIENT_ID'];
      
      // Importing auth options should throw an error
      expect(() => {
        jest.resetModules();
        require('./auth');
      }).toThrow();
    });
  });

  describe('Social Provider Configuration', () => {
    it('should configure Google provider with environment variables', () => {
      const { authOptions } = require('./auth');
      
      const googleProvider = authOptions.providers.find(
        (provider: any) => provider.id === 'google'
      );
      
      expect(googleProvider).toBeDefined();
      expect(googleProvider.options.clientId).toBe('test-google-client-id');
      expect(googleProvider.options.clientSecret).toBe('test-google-client-secret');
    });

    it('should configure Apple provider with environment variables', () => {
      const { authOptions } = require('./auth');
      
      const appleProvider = authOptions.providers.find(
        (provider: any) => provider.id === 'apple'
      );
      
      expect(appleProvider).toBeDefined();
      expect(appleProvider.options.clientId).toBe('test-apple-id');
      expect(appleProvider.options.clientSecret).toBeDefined();
      expect(appleProvider.options.clientSecret.teamId).toBe('test-apple-team-id');
      expect(appleProvider.options.clientSecret.privateKey).toBe('test-apple-private-key');
      expect(appleProvider.options.clientSecret.keyId).toBe('test-apple-key-id');
    });

    it('should configure Facebook provider with environment variables', () => {
      const { authOptions } = require('./auth');
      
      const facebookProvider = authOptions.providers.find(
        (provider: any) => provider.id === 'facebook'
      );
      
      expect(facebookProvider).toBeDefined();
      expect(facebookProvider.options.clientId).toBe('test-facebook-client-id');
      expect(facebookProvider.options.clientSecret).toBe('test-facebook-client-secret');
    });
  });

  describe('Email Provider Configuration', () => {
    it('should configure Email provider with environment variables', () => {
      const { authOptions } = require('./auth');
      
      const emailProvider = authOptions.providers.find(
        (provider: any) => provider.id === 'email'
      );
      
      expect(emailProvider).toBeDefined();
      expect(emailProvider.options.server).toEqual({
        host: 'smtp.example.com',
        port: 587,
        auth: {
          user: 'test-email-user',
          pass: 'test-email-password'
        }
      });
      expect(emailProvider.options.from).toBe('noreply@example.com');
    });
  });

  describe('Authentication Pages Configuration', () => {
    it('should configure custom authentication pages', () => {
      const { authOptions } = require('./auth');
      
      expect(authOptions.pages).toBeDefined();
      expect(authOptions.pages.signIn).toBe('/auth/signin');
      expect(authOptions.pages.signOut).toBe('/auth/signout');
      expect(authOptions.pages.error).toBe('/auth/error');
      expect(authOptions.pages.verifyRequest).toBe('/auth/verify-request');
    });
  });

  describe('Session Configuration', () => {
    it('should use JWT strategy for sessions', () => {
      const { authOptions } = require('./auth');
      
      expect(authOptions.session).toBeDefined();
      expect(authOptions.session.strategy).toBe('jwt');
    });
  });

  describe('Callbacks Configuration', () => {
    it('should configure session and JWT callbacks', () => {
      const { authOptions } = require('./auth');
      
      expect(authOptions.callbacks).toBeDefined();
      expect(typeof authOptions.callbacks.session).toBe('function');
      expect(typeof authOptions.callbacks.jwt).toBe('function');
    });

    it('should include user ID in session', async () => {
      const { authOptions } = require('./auth');
      
      const mockSession = { user: { name: 'Test User', email: 'test@example.com' } };
      const mockToken = { sub: 'user-123', name: 'Test User', email: 'test@example.com' };
      
      const result = await authOptions.callbacks.session({ session: mockSession, token: mockToken });
      
      expect(result.user).toBeDefined();
      expect(result.user.id).toBe('user-123');
    });
  });
});