import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@a1c/services';

/**
 * API route for user logout
 * 
 * @param request - The incoming request object
 * @returns NextResponse with success status
 */
export async function POST(request: NextRequest) {
  try {
    // Attempt to logout
    const response = await authService.logout();
    
    if (response.success) {
      // Clear authentication cookie if using real Cognito
      // This is just a placeholder for now
      const responseObj = NextResponse.json({
        success: true,
      });
      
      // In a real implementation, you would clear the auth cookie
      // responseObj.cookies.delete('auth-token');
      
      return responseObj;
    } else {
      return NextResponse.json(
        { error: response.error || 'Logout failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}