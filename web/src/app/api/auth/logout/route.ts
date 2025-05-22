import { logout } from '@a1c/services';

export async function POST(): Promise<Response> {
  try {
    const result = await logout();
    
    if (!result.success) {
      return Response.json(
        { error: result.error || 'Logout failed' },
        { status: 500 }
      );
    }
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Logout API error:', error);
    return Response.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}