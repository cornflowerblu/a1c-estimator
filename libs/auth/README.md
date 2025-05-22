# Authentication Library

This library provides authentication functionality for the application using AWS Cognito and NextAuth.js. It supports multiple authentication methods including email magic links, social providers (Google, Apple, Facebook), and passkeys.

## Features

- AWS Cognito integration for user management
- Social authentication providers (Google, Apple, Facebook)
- Email magic link authentication
- JWT-based session management
- Protected routes and components
- Custom authentication hooks

## Usage

### Server-Side Authentication

```typescript
import { authOptions } from '@a1c/auth';
import NextAuth from 'next-auth';

// Create NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

### Client-Side Authentication

```typescript
import { useAuth } from '@a1c/auth';

function MyProtectedComponent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }
  
  return <div>Welcome, {user.name}!</div>;
}
```

### Protected Routes

```typescript
import { ProtectedRoute } from '@a1c/auth';

function MyPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

## Configuration

The authentication system requires several environment variables to be configured. See the main project README.md for detailed setup instructions.

### Required Environment Variables

```
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:4200
NEXTAUTH_SECRET=your-nextauth-secret

# AWS Cognito Configuration
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_COGNITO_CLIENT_ID=your-app-client-id
COGNITO_CLIENT_SECRET=your-app-client-secret

# Social Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
APPLE_ID=your-services-id
APPLE_TEAM_ID=your-team-id
APPLE_PRIVATE_KEY=your-private-key-contents
APPLE_KEY_ID=your-key-id
FACEBOOK_CLIENT_ID=your-app-id
FACEBOOK_CLIENT_SECRET=your-app-secret

# Email Configuration
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-smtp-username
EMAIL_SERVER_PASSWORD=your-smtp-password
EMAIL_FROM=noreply@yourdomain.com
```

## Testing

Run `nx test auth` to execute the unit tests via [Jest](https://jestjs.io).

The tests validate:
- Authentication configuration
- Provider setup
- Session and JWT handling
- Environment variable configuration

## Building

Run `nx build auth` to build the library.
