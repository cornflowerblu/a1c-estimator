# Modern Web Application Development Framework with Nx

A comprehensive monorepo setup using Nx for building scalable web applications with React, Next.js, and TypeScript. This framework provides a modular architecture with shared libraries for UI components, services, data access, and utilities.

The project implements a modern development environment with full testing support through Jest and Cypress, build optimization via Vite, and continuous integration using GitHub Actions. It features a modular architecture that separates concerns into distinct libraries, making it ideal for large-scale applications that require maintainable and reusable code.

## Repository Structure
```
.
├── libs/                      # Shared libraries
│   ├── data-access/          # Data access layer for API interactions
│   ├── services/             # Business logic and service layer
│   ├── types/                # Shared TypeScript type definitions
│   ├── ui/                   # Reusable React UI components
│   └── utils/                # Common utility functions
├── web/                      # Main Next.js web application
│   ├── src/
│   │   └── app/             # Next.js app directory with API routes
│   └── specs/               # Web application tests
├── web-e2e/                 # End-to-end tests using Cypress
├── nx.json                  # Nx workspace configuration
└── package.json             # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js 20.x or later
- npm 8.x or later
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm ci --legacy-peer-deps

# Build all libraries
npx nx run-many --target=build --all
```

### Quick Start
1. Start the development server:
```bash
npx nx serve web
```

2. Run tests:
```bash
# Unit tests
npx nx test

# E2E tests
npx nx e2e web-e2e
```

### More Detailed Examples

1. Creating a new library:
```bash
npx nx g @nx/react:library my-library
```

2. Running affected tests:
```bash
npx nx affected:test
```

3. Building specific projects:
```bash
npx nx build web
```

### Troubleshooting

1. Common Build Issues
- Issue: Module not found errors
  ```bash
  # Clear Nx cache
  npx nx reset
  # Rebuild all projects
  npx nx run-many --target=build --all
  ```

2. Development Server Issues
- Issue: Hot reload not working
  ```bash
  # Clear Next.js cache
  rm -rf web/.next
  # Restart development server
  npx nx serve web
  ```

## Data Flow
The application follows a layered architecture pattern with clear separation of concerns.

```ascii
[Client] -> [Next.js Routes] -> [Services Layer] -> [Data Access Layer] -> [External APIs]
     ^            |                    |                     |
     |            v                    v                     v
     +--------- [UI Components] <- [Business Logic] <- [Data Models]
```

Component interactions:
1. UI components consume services for business logic
2. Services use data-access layer for API interactions
3. Types library provides shared interfaces across layers
4. Utils library provides common functionality
5. Next.js API routes handle external requests

## Authentication Setup

This project uses AWS Cognito for authentication, providing multiple authentication methods including passwordless magic links, social logins, and passkeys (WebAuthn).

### AWS Cognito Configuration

#### 1. Create a User Pool

1. Sign in to the [AWS Management Console](https://aws.amazon.com/console/)
2. Navigate to the Cognito service
3. Click "Create user pool"
4. Configure sign-in experience:
   - Select "Email" as the primary authentication method
   - Enable "Allow users to sign in with a preferred username"
   - Under "User name requirements," select "Make user name case sensitive"
5. Configure security requirements:
   - For password policy, select "Cognito defaults" or customize as needed
   - Enable Multi-Factor Authentication (MFA) as "Optional" for enhanced security
   - Select your preferred account recovery method (recommended: Email only)
6. Configure sign-up experience:
   - Select which attributes are required (recommended: name, email)
   - Enable self-registration
7. Configure message delivery:
   - Select "Send email with Cognito" for development
   - For production, configure Amazon SES for improved deliverability
8. Integrate your app:
   - Provide a User Pool name (e.g., "MyAppUserPool")
   - Select "Use the Cognito Hosted UI" and configure a domain
   - Create an app client with a name (e.g., "MyAppClient")
   - Set callback URLs (e.g., `http://localhost:4200/auth/callback` for development)
   - Select "Authorization code grant" flow
   - Select OAuth scopes (email, openid, profile)
9. Review and create the User Pool

#### 2. Configure App Client Settings

1. In your User Pool, navigate to "App integration" > "App client settings"
2. Enable the identity providers you want to use
3. Configure the callback and sign-out URLs
4. Select the OAuth flows and scopes
5. Save changes

### Social Provider Integration

#### Google Authentication Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Configure the consent screen if prompted
6. Select "Web application" as the application type
7. Add authorized JavaScript origins (e.g., `https://yourdomain.com`)
8. Add authorized redirect URIs:
   - For Cognito: `https://<your-cognito-domain>.auth.<region>.amazoncognito.com/oauth2/idpresponse`
9. Click "Create" and note your Client ID and Client Secret
10. In AWS Cognito:
    - Go to "Identity providers" > "Google"
    - Enter your Google Client ID and Client Secret
    - Set the authorized scopes (typically "profile email openid")
    - Click "Save changes"

#### Apple Authentication Setup

1. Go to the [Apple Developer Portal](https://developer.apple.com/)
2. Navigate to "Certificates, Identifiers & Profiles"
3. Under "Identifiers," add a new identifier
4. Select "App IDs" and register a new App ID
5. Enable "Sign In with Apple" capability
6. Create a Services ID for your web application
7. Configure the domain and return URL:
   - Return URL: `https://<your-cognito-domain>.auth.<region>.amazoncognito.com/oauth2/idpresponse`
8. Generate a key for Sign in with Apple
9. Download the key and note the Key ID
10. In AWS Cognito:
    - Go to "Identity providers" > "Apple"
    - Enter your Apple Services ID, Team ID, Key ID, and private key
    - Click "Save changes"

#### Facebook Authentication Setup

1. Go to [Facebook for Developers](https://developers.facebook.com/)
2. Create a new app or select an existing one
3. Add the "Facebook Login" product
4. Configure the OAuth redirect URI:
   - `https://<your-cognito-domain>.auth.<region>.amazoncognito.com/oauth2/idpresponse`
5. In the app settings, note your App ID and App Secret
6. In AWS Cognito:
   - Go to "Identity providers" > "Facebook"
   - Enter your Facebook App ID and App Secret
   - Set the authorized scopes (typically "public_profile,email")
   - Click "Save changes"

### Magic Link Email Setup

1. In your AWS Cognito User Pool, go to "Message customizations"
2. Customize the "Verification message" template:
   ```
   Hello {####},
   
   Thank you for registering! Click the link below to verify your email address:
   {##Verify Email##}
   
   This link will expire in 24 hours.
   
   If you did not request this verification, please ignore this email.
   ```
3. For production, set up Amazon SES for improved email deliverability:
   - Create and verify an email identity in Amazon SES
   - Configure your Cognito User Pool to use Amazon SES

4. To implement magic link authentication in your application:
   - Use the Cognito API's `forgotPassword` and `confirmForgotPassword` methods
   - Or implement a custom auth flow using Lambda triggers

### Passkey (WebAuthn) Setup

1. Enable FIDO security keys in your Cognito User Pool:
   - Go to "MFA and verifications" > "MFA enforcement"
   - Enable "Optional MFA" or "Required MFA"
   - Select "FIDO security keys" as an MFA method

2. Implement WebAuthn in your frontend application:
   - Use the WebAuthn API for registering and authenticating with passkeys
   - Integrate with Cognito's custom authentication flow

### Environment Variables

Create a `.env.local` file in your project root with the following variables:

```
# AWS Cognito Configuration
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_xxxxxxxxx
NEXT_PUBLIC_COGNITO_APP_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_COGNITO_DOMAIN=your-domain.auth.us-east-1.amazoncognito.com

# Social Provider Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=xxxxxxxxxx.apps.googleusercontent.com
NEXT_PUBLIC_FACEBOOK_APP_ID=xxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPLE_CLIENT_ID=com.your.service

# Redirect URLs
NEXT_PUBLIC_REDIRECT_SIGN_IN=http://localhost:4200/auth/callback
NEXT_PUBLIC_REDIRECT_SIGN_OUT=http://localhost:4200/
```

For production, set these environment variables in your deployment platform.

### Authentication Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│    User     │────▶│  Frontend   │────▶│  AWS Cognito│────▶│  Identity   │
│             │     │  Application│     │  User Pool  │     │  Provider   │
│             │◀────│             │◀────│             │◀────│             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                           │                   ▲
                           │                   │
                           ▼                   │
                    ┌─────────────┐     ┌─────────────┐
                    │             │     │             │
                    │  Protected  │     │  JWT Token  │
                    │  Resources  │◀────│  Validation │
                    │             │     │             │
                    └─────────────┘     └─────────────┘
```

#### Passwordless Authentication Flow

1. User enters email address
2. System sends magic link via email
3. User clicks the link
4. Cognito validates the link and issues JWT tokens
5. Application stores tokens and establishes session
6. Protected resources validate JWT tokens for access

#### Social Login Flow

1. User selects social provider (Google, Apple, Facebook)
2. User is redirected to provider's login page
3. User authenticates with the provider
4. Provider redirects back to Cognito with authorization code
5. Cognito exchanges code for tokens and user information
6. Application receives and stores JWT tokens
7. Protected resources validate JWT tokens for access

#### Passkey Authentication Flow

1. User registers a passkey during account setup
2. For subsequent logins, user selects passkey authentication
3. Browser prompts for biometric verification or PIN
4. WebAuthn API handles cryptographic verification
5. Cognito validates the authentication and issues JWT tokens
6. Application stores tokens and establishes session
7. Protected resources validate JWT tokens for access

### Troubleshooting Common Authentication Issues

#### 1. User Cannot Sign In

**Symptoms:**
- "User does not exist" errors
- "Incorrect username or password" errors

**Possible Solutions:**
- Verify the user exists in the Cognito User Pool
- Check if the user's email is verified
- Ensure the user is not disabled or deleted
- For social logins, verify the identity provider configuration

#### 2. Magic Links Not Working

**Symptoms:**
- Magic links expire immediately
- "Invalid verification code" errors

**Possible Solutions:**
- Check if the link was clicked after the expiration time (default: 24 hours)
- Verify the correct Cognito app client ID is being used
- Ensure the email templates are correctly configured
- Check if the user's email address is verified

#### 3. Social Login Failures

**Symptoms:**
- Redirect loops
- "Error authenticating with provider" messages

**Possible Solutions:**
- Verify the client ID and secret are correct
- Check that redirect URIs are properly configured both in Cognito and the provider
- Ensure the required scopes are enabled
- Check browser console for CORS or other errors

#### 4. JWT Token Issues

**Symptoms:**
- "Invalid token" errors
- Premature session expiration

**Possible Solutions:**
- Verify the token has not expired
- Check if the token signature is valid
- Ensure the correct user pool ID is being used for verification
- Implement token refresh logic to handle expiring tokens

#### 5. CORS Issues

**Symptoms:**
- API calls fail with CORS errors
- Authentication redirects fail

**Possible Solutions:**
- Add your application domain to the allowed origins in your API configuration
- Ensure the Cognito domain is properly configured
- Check that redirect URLs are correctly set in the Cognito app client settings

## Infrastructure

### Build System
- Nx workspace configuration manages project dependencies and build pipeline
- Vite handles UI library bundling and optimization
- Jest and Cypress handle testing infrastructure

### CI/CD
- GitHub Actions workflow for continuous integration
- Automated testing and building of affected projects
- Nx Cloud integration for distributed task execution

### Development Tools
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js for server-side rendering and API routes