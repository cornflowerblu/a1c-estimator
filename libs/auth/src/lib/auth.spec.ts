import { authOptions } from './auth';
import { mockCognitoAuth, cognitoConfig } from './cognito-auth';

// Mock the environment variables
import { setEnvVar } from './environment';

setEnvVar('USE_MOCK_COGNITO', 'true');
setEnvVar('NODE_ENV', 'test');

describe('Auth Configuration', () => {
  it('should include Cognito provider', () => {
    // Check if providers array exists and has items
    expect(authOptions.providers).toBeDefined();
    expect(authOptions.providers.length).toBeGreaterThan(0);
    
    // Check if at least one provider has id 'cognito'
    const cognitoProvider = authOptions.providers.find(
      (provider: any) => provider.id === 'cognito'
    );
    expect(cognitoProvider).toBeDefined();
  });

  it('should use JWT session strategy', () => {
    expect(authOptions.session?.strategy).toBe('jwt');
  });

  it('should have proper callback functions', () => {
    expect(typeof authOptions.callbacks?.session).toBe('function');
    expect(typeof authOptions.callbacks?.jwt).toBe('function');
  });
});

describe('Mock Cognito Auth', () => {
  it('should authenticate valid user', async () => {
    const result = await mockCognitoAuth.signIn('testuser', 'password123');
    expect(result.user).toBeDefined();
    expect(result.user.username).toBe('testuser');
    expect(result.user.email).toBe('test@example.com');
  });

  it('should reject invalid credentials', async () => {
    await expect(mockCognitoAuth.signIn('testuser', 'wrongpassword'))
      .rejects.toThrow('Invalid username or password');
  });

  it('should register new user', async () => {
    const username = `user_${Date.now()}`;
    const email = `${username}@example.com`;
    
    const result = await mockCognitoAuth.register(username, email, 'password123', 'Test User');
    
    expect(result.user).toBeDefined();
    expect(result.user.username).toBe(username);
    expect(result.user.email).toBe(email);
    
    // Should be able to sign in with new credentials
    const signInResult = await mockCognitoAuth.signIn(username, 'password123');
    expect(signInResult.user.username).toBe(username);
  });

  it('should reject duplicate username registration', async () => {
    await expect(mockCognitoAuth.register('testuser', 'new@example.com', 'password123'))
      .rejects.toThrow('Username already exists');
  });

  it('should reject duplicate email registration', async () => {
    await expect(mockCognitoAuth.register('newuser', 'test@example.com', 'password123'))
      .rejects.toThrow('Email already exists');
  });
});

describe('Cognito Config', () => {
  it('should use mock in test environment', () => {
    expect(cognitoConfig.useMockCognito).toBe(true);
  });
});
