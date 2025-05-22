import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@a1c/services';

/**
 * API route for user login
 * 
 * @param request - The incoming request object
 * @returns NextResponse with user data or error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Attempt to login
    const response = await authService.login({ email, password });
    
    if (response.success && response.user) {
      // Set authentication cookie if using real Cognito
      // This is just a placeholder for now
      const responseObj = NextResponse.json({
        success: true,
        user: response.user,
      });
      
      // In a real implementation, you would set secure HTTP-only cookies
      // responseObj.cookies.set('auth-token', response.token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
      //   sameSite: 'strict',
      //   maxAge: 60 * 60 * 24, // 1 day
      //   path: '/',
      // });
      
      return responseObj;
    } else {
      return NextResponse.json(
        { error: response.error || 'Login failed' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}