import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@a1c/services';

/**
 * API route to get the current authenticated user
 * 
 * @param request - The incoming request object
 * @returns NextResponse with user data or error
 */
export async function GET(request: NextRequest) {
  try {
    // Get current user
    const response = await authService.getCurrentUser();
    
    if (response.success && response.user) {
      return NextResponse.json({
        success: true,
        user: response.user,
      });
    } else {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}