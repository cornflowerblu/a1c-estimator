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