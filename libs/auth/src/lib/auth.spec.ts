import { authOptions } from './auth';
import { NextAuthOptions } from 'next-auth';

describe('auth', () => {
  it('should export authOptions', () => {
    expect(authOptions).toBeDefined();
    expect(authOptions).toHaveProperty('providers');
    expect(authOptions).toHaveProperty('session');
    expect(authOptions).toHaveProperty('callbacks');
    expect(authOptions).toHaveProperty('pages');
  });

  it('should configure social providers', () => {
    const providers = authOptions.providers;
    
    // Check that we have at least 3 providers (Google, Apple, Facebook)
    expect(providers.length).toBeGreaterThanOrEqual(3);
    
    // Check for specific providers
    const providerIds = providers.map((provider: any) => provider.id);
    expect(providerIds).toContain('google');
    expect(providerIds).toContain('apple');
    expect(providerIds).toContain('facebook');
  });

  it('should use JWT session strategy', () => {
    expect(authOptions.session).toBeDefined();
    expect(authOptions.session.strategy).toBe('jwt');
  });

  it('should configure custom authentication pages', () => {
    expect(authOptions.pages).toBeDefined();
    expect(authOptions.pages.signIn).toBe('/auth/signin');
    expect(authOptions.pages.signOut).toBe('/auth/signout');
    expect(authOptions.pages.error).toBe('/auth/error');
    expect(authOptions.pages.verifyRequest).toBe('/auth/verify-request');
  });

  it('should have session and JWT callbacks', () => {
    expect(authOptions.callbacks).toBeDefined();
    expect(typeof authOptions.callbacks.session).toBe('function');
    expect(typeof authOptions.callbacks.jwt).toBe('function');
  });

  describe('session callback', () => {
    it('should add user ID to session', async () => {
      const mockSession = { user: { name: 'Test User' } };
      const mockToken = { sub: 'user-123' };
      
      const result = await authOptions.callbacks.session({ 
        session: mockSession, 
        token: mockToken,
        user: undefined,
        newSession: undefined,
        trigger: 'update'
      });
      
      expect(result.user).toBeDefined();
      expect(result.user.id).toBe('user-123');
    });
  });

  describe('jwt callback', () => {
    it('should add user ID to token', async () => {
      const mockToken = {};
      const mockUser = { id: 'user-123' };
      
      const result = await authOptions.callbacks.jwt({ 
        token: mockToken, 
        user: mockUser,
        account: undefined,
        profile: undefined,
        isNewUser: undefined,
        session: undefined,
        trigger: 'signIn'
      });
      
      expect(result).toBeDefined();
      expect(result.id).toBe('user-123');
    });
  });
});
