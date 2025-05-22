import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@a1c/services';

/**
 * API route for user registration
 * 
 * @param request - The incoming request object
 * @returns NextResponse with user data or error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }
    
    // Attempt to register
    const response = await authService.register({ email, password }, name);
    
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
        { error: response.error || 'Registration failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}