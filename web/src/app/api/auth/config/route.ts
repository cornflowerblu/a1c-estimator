import { configureAuth, getAuthConfig } from '@a1c/services';
import { AuthConfig } from '@a1c/types';

export async function GET(): Promise<Response> {
  try {
    const config = getAuthConfig();
    return Response.json(config);
  } catch (error) {
    console.error('Get auth config API error:', error);
    return Response.json(
      { error: 'Failed to get auth configuration' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json() as AuthConfig;
    
    if (typeof body.useMock !== 'boolean') {
      return Response.json(
        { error: 'Invalid configuration' },
        { status: 400 }
      );
    }
    
    configureAuth(body.useMock);
    
    return Response.json({ success: true, useMock: body.useMock });
  } catch (error) {
    console.error('Configure auth API error:', error);
    return Response.json(
      { error: 'Failed to configure authentication' },
      { status: 500 }
    );
  }
}