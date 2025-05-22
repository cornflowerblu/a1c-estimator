import { AuthService, AuthCredentials } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  
  // Test credentials
  const validCredentials: AuthCredentials = {
    email: 'test@example.com',
    password: 'Password123!',
  };
  
  const invalidCredentials: AuthCredentials = {
    email: 'nonexistent@example.com',
    password: 'WrongPassword',
  };

  beforeEach(() => {
    // Create a new instance of AuthService for each test
    authService = new AuthService();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      // Use a unique email to avoid conflicts with mock users
      const uniqueCredentials: AuthCredentials = {
        email: `new-user-${Date.now()}@example.com`,
        password: 'NewPassword123!',
      };
      
      const response = await authService.register(uniqueCredentials, 'New User');
      
      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.user?.email).toBe(uniqueCredentials.email);
      expect(response.user?.name).toBe('New User');
      expect(response.token).toBeDefined();
    });

    it('should fail registration for existing email', async () => {
      // First register a user
      const uniqueCredentials: AuthCredentials = {
        email: `existing-user-${Date.now()}@example.com`,
        password: 'Password123!',
      };
      
      await authService.register(uniqueCredentials);
      
      // Try to register again with the same email
      const response = await authService.register(uniqueCredentials);
      
      expect(response.success).toBe(false);
      expect(response.error).toBeDefined();
      expect(response.error).toContain('already exists');
    });
  });

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const response = await authService.login(validCredentials);
      
      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.user?.email).toBe(validCredentials.email);
      expect(response.token).toBeDefined();
    });

    it('should fail login with invalid credentials', async () => {
      const response = await authService.login(invalidCredentials);
      
      expect(response.success).toBe(false);
      expect(response.error).toBeDefined();
      expect(response.error).toContain('Invalid email or password');
    });
  });

  describe('logout', () => {
    it('should logout successfully after login', async () => {
      // First login
      await authService.login(validCredentials);
      
      // Then logout
      const response = await authService.logout();
      
      expect(response.success).toBe(true);
      
      // Verify user is logged out
      const currentUserResponse = await authService.getCurrentUser();
      expect(currentUserResponse.success).toBe(false);
    });
  });

  describe('getCurrentUser', () => {
    it('should return the current user after login', async () => {
      // First login
      await authService.login(validCredentials);
      
      // Get current user
      const response = await authService.getCurrentUser();
      
      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.user?.email).toBe(validCredentials.email);
    });

    it('should return error when no user is logged in', async () => {
      // Ensure no user is logged in
      await authService.logout();
      
      // Get current user
      const response = await authService.getCurrentUser();
      
      expect(response.success).toBe(false);
      expect(response.error).toBeDefined();
    });
  });

  describe('isAuthenticated', () => {
    it('should return true after login', async () => {
      // First login
      await authService.login(validCredentials);
      
      // Check authentication status
      const isAuthenticated = await authService.isAuthenticated();
      
      expect(isAuthenticated).toBe(true);
    });

    it('should return false when no user is logged in', async () => {
      // Ensure no user is logged in
      await authService.logout();
      
      // Check authentication status
      const isAuthenticated = await authService.isAuthenticated();
      
      expect(isAuthenticated).toBe(false);
    });
  });
});