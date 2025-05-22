import { renderHook, act } from '@testing-library/react';
import { useAuth } from './useAuth';
import { AuthService } from '@a1c/services';

// Mock the AuthService
jest.mock('@a1c/services', () => ({
  AuthService: {
    getCurrentUser: jest.fn(),
    signIn: jest.fn(),
    signUp: jest.fn(),
    confirmSignUp: jest.fn(),
    signOut: jest.fn(),
    sendMagicLink: jest.fn(),
    completeMagicLinkAuth: jest.fn(),
    federatedSignIn: jest.fn(),
  },
}));

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with loading state', () => {
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    
    const { result } = renderHook(() => useAuth());
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it('should set authenticated state when user is found', async () => {
    const mockUser = { username: 'test@example.com' };
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.error).toBe(null);
  });

  it('should handle sign in', async () => {
    const mockUser = { username: 'test@example.com' };
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    (AuthService.signIn as jest.Mock).mockResolvedValue(mockUser);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    await act(async () => {
      await result.current.signIn('test@example.com', 'password123');
    });
    
    expect(AuthService.signIn).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(mockUser);
  });

  it('should handle sign out', async () => {
    const mockUser = { username: 'test@example.com' };
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    expect(result.current.isAuthenticated).toBe(true);
    
    await act(async () => {
      await result.current.signOut();
    });
    
    expect(AuthService.signOut).toHaveBeenCalled();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });

  it('should handle sign up', async () => {
    const mockSignUpResult = { user: { username: 'test@example.com' } };
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    (AuthService.signUp as jest.Mock).mockResolvedValue(mockSignUpResult);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    let signUpResult;
    await act(async () => {
      signUpResult = await result.current.signUp('test@example.com', 'password123', { name: 'Test User' });
    });
    
    expect(AuthService.signUp).toHaveBeenCalledWith('test@example.com', 'password123', { name: 'Test User' });
    expect(signUpResult).toEqual(mockSignUpResult);
  });

  it('should handle magic link authentication', async () => {
    const mockSendResult = { success: true };
    const mockUser = { username: 'test@example.com' };
    
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    (AuthService.sendMagicLink as jest.Mock).mockResolvedValue(mockSendResult);
    (AuthService.completeMagicLinkAuth as jest.Mock).mockResolvedValue(mockUser);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    // Send magic link
    let sendResult;
    await act(async () => {
      sendResult = await result.current.sendMagicLink('test@example.com');
    });
    
    expect(AuthService.sendMagicLink).toHaveBeenCalledWith('test@example.com');
    expect(sendResult).toEqual(mockSendResult);
    
    // Complete magic link authentication
    await act(async () => {
      await result.current.completeMagicLinkAuth('test@example.com', '123456');
    });
    
    expect(AuthService.completeMagicLinkAuth).toHaveBeenCalledWith('test@example.com', '123456');
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(mockUser);
  });

  it('should handle social sign in', async () => {
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    await act(async () => {
      await result.current.socialSignIn('Google');
    });
    
    expect(AuthService.federatedSignIn).toHaveBeenCalledWith('Google');
  });

  it('should handle errors', async () => {
    const mockError = new Error('Authentication failed');
    (AuthService.getCurrentUser as jest.Mock).mockResolvedValue(null);
    (AuthService.signIn as jest.Mock).mockRejectedValue(mockError);
    
    const { result, waitForNextUpdate } = renderHook(() => useAuth());
    
    await waitForNextUpdate();
    
    await act(async () => {
      try {
        await result.current.signIn('test@example.com', 'wrong-password');
      } catch (error) {
        // Expected error
      }
    });
    
    expect(result.current.error).toEqual(mockError);
    expect(result.current.isAuthenticated).toBe(false);
  });
});