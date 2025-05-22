import { login } from '@a1c/services';
import { LoginCredentials } from '@a1c/types';

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json() as LoginCredentials;
    
    // Validate required fields
    if (!body.email || !body.password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    const result = await login(body);
    
    if (result.error) {
      return Response.json(
        { error: result.error },
        { status: 401 }
      );
    }
    
    return Response.json({
      user: result.user,
      isAuthenticated: result.isAuthenticated
    });
  } catch (error) {
    console.error('Login API error:', error);
    return Response.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}