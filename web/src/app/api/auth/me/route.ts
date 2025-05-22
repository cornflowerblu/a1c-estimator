import { getCurrentUser } from '@a1c/services';

export async function GET(): Promise<Response> {
  try {
    const result = await getCurrentUser();
    
    if (!result.isAuthenticated) {
      return Response.json(
        { user: null, isAuthenticated: false },
        { status: 401 }
      );
    }
    
    return Response.json({
      user: result.user,
      isAuthenticated: true
    });
  } catch (error) {
    console.error('Get current user API error:', error);
    return Response.json(
      { error: 'Failed to get current user' },
      { status: 500 }
    );
  }
}