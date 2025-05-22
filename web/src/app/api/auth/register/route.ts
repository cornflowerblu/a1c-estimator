import { register } from '@a1c/services';
import { RegisterCredentials } from '@a1c/types';

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json() as RegisterCredentials;
    
    // Validate required fields
    if (!body.email || !body.password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    const result = await register(body);
    
    if (result.error) {
      return Response.json(
        { error: result.error },
        { status: 400 }
      );
    }
    
    return Response.json({
      user: result.user,
      isAuthenticated: result.isAuthenticated
    });
  } catch (error) {
    console.error('Registration API error:', error);
    return Response.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}