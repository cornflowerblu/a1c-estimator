# Authentication Library

This library provides authentication functionality for the A1C Estimator application, including mock and real AWS Cognito authentication.

## Features

- Mock Cognito authentication for development and testing
- Toggle mechanism to switch between mock and real authentication
- Support for multiple authentication methods:
  - Cognito username/password
  - Email magic links
  - Social providers (Google, Apple, Facebook)
- Comprehensive error handling
- TypeScript types for authentication data

## Usage

### Authentication Hook

The `useAuth` hook provides authentication state and methods:

```tsx
import { useAuth } from '@a1c/auth';

function MyComponent() {
  const { 
    user,
    isAuthenticated,
    isLoading,
    error,
    signInWithCognito,
    registerWithCognito,
    signInWithEmail,
    signInWithProvider,
    signOut,
    resetError
  } = useAuth();

  // Use authentication methods as needed
}
```

### Cognito Authentication

#### Sign In

```tsx
const handleSignIn = async () => {
  const result = await signInWithCognito({
    usernameOrEmail: 'username',
    password: 'password'
  });
  
  if (result.success) {
    // User is authenticated
  } else {
    // Handle error
  }
};
```

#### Registration

```tsx
const handleRegister = async () => {
  const result = await registerWithCognito({
    username: 'username',
    email: 'user@example.com',
    password: 'password',
    name: 'User Name' // Optional
  });
  
  if (result.success) {
    // User is registered and authenticated
  } else {
    // Handle error
  }
};
```

### Email Authentication

```tsx
const handleEmailSignIn = async () => {
  const result = await signInWithEmail('user@example.com');
  
  if (result.success) {
    // Email sent
  } else {
    // Handle error
  }
};
```

### Social Authentication

```tsx
const handleSocialSignIn = (provider: string) => {
  signInWithProvider(provider); // 'google', 'apple', or 'facebook'
};
```

## Mock vs Real Cognito

### Using Mock Cognito (Development)

By default, the library uses mock Cognito authentication in development environments. This allows you to develop and test without a real AWS Cognito setup.

Mock users:
- Username: `testuser`, Password: `password123`
- Username: `demouser`, Password: `demo123`

You can also register new users through the registration form.

### Switching to Real Cognito

To use real AWS Cognito:

1. Set the environment variable:
   ```
   USE_MOCK_COGNITO=false
   ```

2. Configure AWS Cognito credentials:
   ```
   COGNITO_REGION=us-east-1
   COGNITO_USER_POOL_ID=your-user-pool-id
   COGNITO_CLIENT_ID=your-client-id
   ```

3. Install AWS SDK dependencies:
   ```
   npm install amazon-cognito-identity-js @aws-sdk/client-cognito-identity-provider
   ```

4. Update the implementation in `cognito-auth.ts`:
   - Follow the instructions in the "REAL COGNITO IMPLEMENTATION GUIDE" section
   - Replace mock functions with real AWS SDK calls

## Error Handling

The authentication methods provide error information:

```tsx
const { error } = useAuth();

if (error) {
  console.log(error.type); // AuthErrorType enum
  console.log(error.message); // User-friendly error message
}
```

## Testing

Run the tests to verify authentication functionality:

```
npx nx test auth
```

The tests cover:
- Authentication configuration
- Mock Cognito authentication
- User registration
- Error handling
=======
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
