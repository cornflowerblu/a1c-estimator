import { AuthService } from './auth-service';
import { Auth } from 'aws-amplify';

// Mock AWS Amplify Auth
jest.mock('aws-amplify', () => {
  return {
    Auth: {
      configure: jest.fn(),
      signIn: jest.fn(),
      signUp: jest.fn(),
      confirmSignUp: jest.fn(),
      signOut: jest.fn(),
      currentAuthenticatedUser: jest.fn(),
      currentSession: jest.fn(),
      forgotPassword: jest.fn(),
      forgotPasswordSubmit: jest.fn(),
      federatedSignIn: jest.fn(),
    },
  };
});

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock environment variables
    process.env.NEXT_PUBLIC_AWS_REGION = 'us-east-1';
    process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID = 'us-east-1_example';
    process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID = 'example-client-id';
    process.env.NEXT_PUBLIC_COGNITO_DOMAIN = 'example-domain.auth.us-east-1.amazoncognito.com';
    process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN = 'http://localhost:4200/auth/callback';
    process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT = 'http://localhost:4200/';
  });

  describe('configure', () => {
    it('should configure Auth with environment variables', () => {
      AuthService.configure();
      
      expect(Auth.configure).toHaveBeenCalledWith({
        region: 'us-east-1',
        userPoolId: 'us-east-1_example',
        userPoolWebClientId: 'example-client-id',
        oauth: {
          domain: 'example-domain.auth.us-east-1.amazoncognito.com',
          scope: ['email', 'profile', 'openid'],
          redirectSignIn: 'http://localhost:4200/auth/callback',
          redirectSignOut: 'http://localhost:4200/',
          responseType: 'code',
        },
      });
    });
  });

  describe('signIn', () => {
    it('should call Auth.signIn with correct parameters', async () => {
      const mockUser = { username: 'test@example.com' };
      (Auth.signIn as jest.Mock).mockResolvedValue(mockUser);
      
      const result = await AuthService.signIn('test@example.com', 'password123');
      
      expect(Auth.signIn).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(result).toEqual(mockUser);
    });
    
    it('should throw an error when Auth.signIn fails', async () => {
      const mockError = new Error('Invalid credentials');
      (Auth.signIn as jest.Mock).mockRejectedValue(mockError);
      
      await expect(AuthService.signIn('test@example.com', 'wrong-password')).rejects.toThrow(mockError);
    });
  });

  describe('signUp', () => {
    it('should call Auth.signUp with correct parameters', async () => {
      const mockResult = { user: { username: 'test@example.com' } };
      (Auth.signUp as jest.Mock).mockResolvedValue(mockResult);
      
      const result = await AuthService.signUp('test@example.com', 'password123', { name: 'Test User' });
      
      expect(Auth.signUp).toHaveBeenCalledWith({
        username: 'test@example.com',
        password: 'password123',
        attributes: {
          email: 'test@example.com',
          name: 'Test User',
        },
      });
      expect(result).toEqual(mockResult);
    });
  });

  describe('confirmSignUp', () => {
    it('should call Auth.confirmSignUp with correct parameters', async () => {
      const mockResult = { success: true };
      (Auth.confirmSignUp as jest.Mock).mockResolvedValue(mockResult);
      
      const result = await AuthService.confirmSignUp('test@example.com', '123456');
      
      expect(Auth.confirmSignUp).toHaveBeenCalledWith('test@example.com', '123456');
      expect(result).toEqual(mockResult);
    });
  });

  describe('signOut', () => {
    it('should call Auth.signOut', async () => {
      await AuthService.signOut();
      
      expect(Auth.signOut).toHaveBeenCalled();
    });
  });

  describe('getCurrentUser', () => {
    it('should return the current authenticated user', async () => {
      const mockUser = { username: 'test@example.com' };
      (Auth.currentAuthenticatedUser as jest.Mock).mockResolvedValue(mockUser);
      
      const result = await AuthService.getCurrentUser();
      
      expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
      expect(result).toEqual(mockUser);
    });
    
    it('should return null when no user is authenticated', async () => {
      (Auth.currentAuthenticatedUser as jest.Mock).mockRejectedValue(new Error('No current user'));
      
      const result = await AuthService.getCurrentUser();
      
      expect(result).toBeNull();
    });
  });

  describe('getCurrentSession', () => {
    it('should return the current session', async () => {
      const mockSession = { idToken: { jwtToken: 'token123' } };
      (Auth.currentSession as jest.Mock).mockResolvedValue(mockSession);
      
      const result = await AuthService.getCurrentSession();
      
      expect(Auth.currentSession).toHaveBeenCalled();
      expect(result).toEqual(mockSession);
    });
  });

  describe('forgotPassword', () => {
    it('should call Auth.forgotPassword with correct parameters', async () => {
      const mockResult = { success: true };
      (Auth.forgotPassword as jest.Mock).mockResolvedValue(mockResult);
      
      const result = await AuthService.forgotPassword('test@example.com');
      
      expect(Auth.forgotPassword).toHaveBeenCalledWith('test@example.com');
      expect(result).toEqual(mockResult);
    });
  });

  describe('confirmForgotPassword', () => {
    it('should call Auth.forgotPasswordSubmit with correct parameters', async () => {
      const mockResult = { success: true };
      (Auth.forgotPasswordSubmit as jest.Mock).mockResolvedValue(mockResult);
      
      const result = await AuthService.confirmForgotPassword('test@example.com', '123456', 'newPassword123');
      
      expect(Auth.forgotPasswordSubmit).toHaveBeenCalledWith('test@example.com', '123456', 'newPassword123');
      expect(result).toEqual(mockResult);
    });
  });

  describe('sendMagicLink', () => {
    it('should send a magic link for existing users', async () => {
      // Mock user exists
      (Auth.signIn as jest.Mock).mockRejectedValue({ code: 'NotAuthorizedException' });
      (Auth.forgotPassword as jest.Mock).mockResolvedValue({ success: true });
      
      const result = await AuthService.sendMagicLink('test@example.com');
      
      expect(Auth.forgotPassword).toHaveBeenCalledWith('test@example.com');
      expect(result).toEqual({ success: true });
    });
    
    it('should create a new user and send magic link for non-existing users', async () => {
      // Mock user doesn't exist
      (Auth.signIn as jest.Mock).mockRejectedValue({ code: 'UserNotFoundException' });
      (Auth.signUp as jest.Mock).mockResolvedValue({ user: { username: 'test@example.com' } });
      (Auth.forgotPassword as jest.Mock).mockResolvedValue({ success: true });
      
      const result = await AuthService.sendMagicLink('test@example.com');
      
      expect(Auth.signUp).toHaveBeenCalled();
      expect(Auth.forgotPassword).toHaveBeenCalledWith('test@example.com');
      expect(result).toEqual({ success: true });
    });
  });

  describe('federatedSignIn', () => {
    it('should call Auth.federatedSignIn with correct provider', async () => {
      await AuthService.federatedSignIn('Google');
      
      expect(Auth.federatedSignIn).toHaveBeenCalledWith({
        provider: 'Google',
      });
    });
  });
});