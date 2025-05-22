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

This project uses AWS Cognito for authentication with multiple authentication methods including email magic links, social providers (Google, Apple, Facebook), and passkeys.

### AWS Cognito Configuration

1. **Create a User Pool**:
   - Sign in to the [AWS Management Console](https://aws.amazon.com/console/)
   - Navigate to the Cognito service
   - Click "Create user pool"
   - Choose "Email" as the primary authentication attribute
   - Enable "Email" as a required attribute
   - Configure password policies according to your security requirements
   - Enable self-registration
   - Configure MFA settings (optional)
   - Create a new app client with the following settings:
     - Generate a client secret
     - Enable all authentication flows
     - Set callback URLs to include your development and production URLs
     - Configure sign-out URLs
   - Complete the user pool creation

2. **Configure Environment Variables**:
   - Create or update your `.env.local` file with the following variables:
   ```
   # AWS Cognito Configuration
   NEXT_PUBLIC_AWS_REGION=us-east-1
   NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
   NEXT_PUBLIC_COGNITO_CLIENT_ID=your-app-client-id
   COGNITO_CLIENT_SECRET=your-app-client-secret
   ```

3. **Configure Passwordless Authentication**:
   - In your Cognito User Pool, go to "Message customizations"
   - Customize the email verification message to include the magic link format
   - Ensure your email configuration is set up correctly for sending emails

### Social Provider Integration

#### Google Authentication

1. **Create Google OAuth Credentials**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Navigate to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Select "Web application" as the application type
   - Add authorized JavaScript origins (your app's domain)
   - Add authorized redirect URIs:
     - Development: `http://localhost:4200/api/auth/callback/google`
     - Production: `https://yourdomain.com/api/auth/callback/google`
   - Click "Create" and note your Client ID and Client Secret

2. **Configure Environment Variables**:
   ```
   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

#### Apple Authentication

1. **Create Apple Developer Account and App ID**:
   - Sign in to the [Apple Developer Portal](https://developer.apple.com/)
   - Navigate to "Certificates, Identifiers & Profiles"
   - Create a new App ID if you don't have one
   - Enable "Sign In with Apple" capability
   - Create a Services ID for web authentication
   - Configure domains and redirect URLs:
     - Development: `http://localhost:4200/api/auth/callback/apple`
     - Production: `https://yourdomain.com/api/auth/callback/apple`
   - Generate a private key for Sign in with Apple
   - Download the key and note the Key ID

2. **Configure Environment Variables**:
   ```
   # Apple OAuth
   APPLE_ID=your-services-id
   APPLE_TEAM_ID=your-team-id
   APPLE_PRIVATE_KEY=your-private-key-contents
   APPLE_KEY_ID=your-key-id
   ```

#### Facebook Authentication

1. **Create Facebook Developer Account and App**:
   - Go to [Facebook for Developers](https://developers.facebook.com/)
   - Create a new app or select an existing one
   - Add the "Facebook Login" product
   - Configure Valid OAuth Redirect URIs:
     - Development: `http://localhost:4200/api/auth/callback/facebook`
     - Production: `https://yourdomain.com/api/auth/callback/facebook`
   - Note your App ID and App Secret

2. **Configure Environment Variables**:
   ```
   # Facebook OAuth
   FACEBOOK_CLIENT_ID=your-app-id
   FACEBOOK_CLIENT_SECRET=your-app-secret
   ```

### Magic Link Email Setup

1. **Configure Email Provider**:
   - Choose an email service provider (AWS SES, SendGrid, etc.)
   - Set up the required credentials for your chosen provider
   - Add the following environment variables:
   ```
   # Email Configuration
   EMAIL_SERVER_HOST=smtp.example.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-smtp-username
   EMAIL_SERVER_PASSWORD=your-smtp-password
   EMAIL_FROM=noreply@yourdomain.com
   ```

2. **Customize Email Templates**:
   - In your Cognito User Pool, go to "Message customizations"
   - Customize the email verification message template
   - Include clear instructions and branding in your email templates

### Environment Variables Template

Create a `.env.local` file in the root of your project with the following template:

```
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:4200
NEXTAUTH_SECRET=your-nextauth-secret

# AWS Cognito Configuration
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_COGNITO_CLIENT_ID=your-app-client-id
COGNITO_CLIENT_SECRET=your-app-client-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Apple OAuth
APPLE_ID=your-services-id
APPLE_TEAM_ID=your-team-id
APPLE_PRIVATE_KEY=your-private-key-contents
APPLE_KEY_ID=your-key-id

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-app-id
FACEBOOK_CLIENT_SECRET=your-app-secret

# Email Configuration
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-smtp-username
EMAIL_SERVER_PASSWORD=your-smtp-password
EMAIL_FROM=noreply@yourdomain.com
```

### Authentication Flow Diagrams

#### Email Magic Link Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│  User       │     │  Next.js    │     │  AWS        │     │  User       │
│  enters     ├────►│  sends      ├────►│  Cognito    ├────►│  receives   │
│  email      │     │  auth       │     │  generates  │     │  email with │
│             │     │  request    │     │  magic link │     │  magic link │
└─────────────┘     └─────────────┘     └─────────────┘     └──────┬──────┘
                                                                   │
┌─────────────┐     ┌─────────────┐     ┌─────────────┐            │
│             │     │             │     │             │            │
│  User       │◄────┤  Next.js    │◄────┤  AWS        │◄───────────┘
│  logged in  │     │  creates    │     │  Cognito    │
│  session    │     │  session    │     │  validates  │
│             │     │             │     │  token      │
└─────────────┘     └─────────────┘     └─────────────┘
```

#### Social Provider Authentication Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│  User       │     │  Next.js    │     │  Social     │     │  User       │
│  clicks     ├────►│  redirects  ├────►│  Provider   ├────►│  logs in    │
│  social     │     │  to provider│     │  auth page  │     │  with       │
│  button     │     │             │     │             │     │  provider   │
└─────────────┘     └─────────────┘     └─────────────┘     └──────┬──────┘
                                                                   │
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────▼──────┐
│             │     │             │     │             │     │             │
│  User       │◄────┤  Next.js    │◄────┤  AWS        │◄────┤  Provider   │
│  logged in  │     │  creates    │     │  Cognito    │     │  returns    │
│  session    │     │  session    │     │  creates    │     │  auth code  │
│             │     │             │     │  user       │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

### Troubleshooting Authentication Issues

#### Common Cognito Configuration Issues

1. **Invalid Client ID or User Pool ID**
   - Error: "Invalid client id" or "User pool not found"
   - Solution: Double-check your `NEXT_PUBLIC_COGNITO_CLIENT_ID` and `NEXT_PUBLIC_COGNITO_USER_POOL_ID` values

2. **Incorrect Region**
   - Error: "Invalid region specified"
   - Solution: Verify your `NEXT_PUBLIC_AWS_REGION` matches the region where your Cognito User Pool is created

3. **Missing Permissions**
   - Error: "User is not authorized to perform this action"
   - Solution: Ensure your AWS credentials have the necessary permissions to access Cognito

#### Social Provider Issues

1. **Invalid Redirect URI**
   - Error: "redirect_uri_mismatch" or similar errors
   - Solution: Ensure the redirect URIs configured in your social provider match exactly with your application's callback URLs

2. **Missing Scopes**
   - Error: "insufficient_scope" or missing user information
   - Solution: Check that you've requested the necessary scopes (email, profile, etc.) in your provider configuration

3. **CORS Issues**
   - Error: Cross-origin errors in browser console
   - Solution: Ensure your domain is properly configured in the provider's allowed origins

#### Magic Link Email Issues

1. **Emails Not Being Received**
   - Check spam/junk folders
   - Verify email configuration (SMTP settings, credentials)
   - Ensure the email address is correctly formatted

2. **Invalid or Expired Links**
   - Error: "Link expired" or "Invalid token"
   - Solution: Magic links typically expire after a short period (usually 15 minutes). Request a new link if expired.

3. **Email Service Limitations**
   - Some email providers have sending limits or may block automated emails
   - Consider using a dedicated email service like AWS SES, SendGrid, or Mailgun

#### Session Issues

1. **Session Not Persisting**
   - Error: User is logged out unexpectedly
   - Solution: Check that `NEXTAUTH_SECRET` is properly set and consistent across deployments

2. **JWT Errors**
   - Error: "JWT malformed" or "Invalid signature"
   - Solution: Ensure your JWT configuration is correct and the secret is properly set

For additional troubleshooting, enable debug mode in your NextAuth configuration:

```typescript
export const authOptions: NextAuthOptions = {
  // ... other options
  debug: true,
  // ... rest of configuration
};
```

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