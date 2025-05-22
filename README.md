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

This application uses AWS Cognito for secure user authentication with multiple authentication methods including passwordless magic links, social logins, and passkeys.

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
   - Password policy: Choose "Cognito defaults" or customize as needed
   - Multi-factor authentication (MFA): Select "Optional MFA" to allow users to choose
   - Enable "Email and SMS message verification"
6. Configure sign-up experience:
   - Enable self-registration
   - Select required attributes (at minimum: email)
   - Add custom attributes as needed (e.g., "userType")
7. Configure message delivery:
   - Select "Send email with Cognito" for development or configure SES for production
8. Integrate your app:
   - Add an app client name (e.g., "web-client")
   - Select "Generate a client secret"
   - Set the refresh token expiration (default: 30 days)
   - Select authentication flows (enable all for maximum flexibility)
9. Review and create the user pool

#### 2. Configure App Integration

1. In your user pool, navigate to "App integration"
2. Configure the domain:
   - Choose either an Amazon Cognito domain or use your own custom domain
   - If using Cognito domain, enter a unique prefix
3. Configure the app client:
   - Navigate to "App clients and analytics"
   - Select your app client
   - Under "Hosted UI," enable it
   - Add allowed callback URLs (e.g., `https://yourdomain.com/auth/callback`, `http://localhost:4200/auth/callback`)
   - Add allowed sign-out URLs
   - Select "Authorization code grant" flow
   - Select OAuth scopes (email, openid, profile)
4. Save changes

### Social Provider Integration

#### Google Authentication Setup

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Click "Create Credentials" > "OAuth client ID"
4. Configure the consent screen:
   - Add your app name, user support email, and developer contact information
   - Add authorized domains
5. Create OAuth client ID:
   - Application type: Web application
   - Name: Your application name
   - Authorized JavaScript origins: `https://yourdomain.com` and `http://localhost:4200`
   - Authorized redirect URIs: `https://your-cognito-domain.auth.region.amazoncognito.com/oauth2/idpresponse`
6. Copy the Client ID and Client Secret
7. In AWS Cognito:
   - Navigate to your user pool > "Sign-in experience" > "Federated identity provider sign-in"
   - Add Google as an identity provider
   - Enter the Client ID and Client Secret
   - Map Google attributes to user pool attributes
   - Save changes

#### Apple Authentication Setup

1. Sign in to the [Apple Developer Portal](https://developer.apple.com/)
2. Navigate to "Certificates, Identifiers & Profiles"
3. Register a new App ID if you don't have one
4. Enable "Sign In with Apple" capability for your App ID
5. Create a Services ID:
   - Register a new identifier > Services ID
   - Enable "Sign In with Apple"
   - Configure the primary app ID
   - Add domains and return URLs (e.g., `https://your-cognito-domain.auth.region.amazoncognito.com/oauth2/idpresponse`)
6. Create a private key:
   - Go to "Keys" > "Add a new key"
   - Enable "Sign In with Apple"
   - Download the key and note the Key ID
7. In AWS Cognito:
   - Navigate to your user pool > "Sign-in experience" > "Federated identity provider sign-in"
   - Add Apple as an identity provider
   - Enter the required information (Services ID, Team ID, Key ID, private key)
   - Map Apple attributes to user pool attributes
   - Save changes

#### Facebook Authentication Setup

1. Create a new app in the [Facebook Developers Portal](https://developers.facebook.com/)
2. Navigate to "Settings" > "Basic"
3. Note your App ID and App Secret
4. Add the Facebook Login product to your app
5. Configure Valid OAuth Redirect URIs:
   - Add `https://your-cognito-domain.auth.region.amazoncognito.com/oauth2/idpresponse`
6. In AWS Cognito:
   - Navigate to your user pool > "Sign-in experience" > "Federated identity provider sign-in"
   - Add Facebook as an identity provider
   - Enter the App ID and App Secret
   - Set the API version (e.g., v15.0)
   - Map Facebook attributes to user pool attributes
   - Save changes

### Magic Link Email Setup

1. Configure your Cognito User Pool for custom authentication:
   - Navigate to your user pool > "Sign-in experience"
   - Under "Authentication flows," enable "Custom authentication flow"

2. Create Lambda functions for the Cognito triggers:
   - Define-auth-challenge: Determines the next challenge in the authentication flow
   - Create-auth-challenge: Creates the magic link and sends the email
   - Verify-auth-challenge-response: Verifies the user's response to the challenge

3. Example Lambda function for Create-auth-challenge:
   ```javascript
   const AWS = require('aws-sdk');
   const crypto = require('crypto');
   const SES = new AWS.SES();

   exports.handler = async (event) => {
     // Only send a code if this is a custom challenge
     if (event.request.challengeName !== 'CUSTOM_CHALLENGE') {
       return event;
     }

     // Generate a random code
     const secretCode = crypto.randomBytes(20).toString('hex');
     
     // Store the code in the session for verification
     event.response.privateChallengeParameters = { secretCode };
     
     // Send the magic link via email
     const magicLink = `https://yourdomain.com/auth/verify?code=${secretCode}&username=${event.request.userAttributes.email}`;
     
     const params = {
       Destination: { ToAddresses: [event.request.userAttributes.email] },
       Message: {
         Body: {
           Html: {
             Charset: 'UTF-8',
             Data: `<html><body><p>Click the link below to sign in:</p><p><a href="${magicLink}">Sign In</a></p></body></html>`
           }
         },
         Subject: { Charset: 'UTF-8', Data: 'Your Magic Link' }
       },
       Source: 'noreply@yourdomain.com'
     };
     
     try {
       await SES.sendEmail(params).promise();
     } catch (error) {
       console.log('Error sending email', error);
     }
     
     return event;
   };
   ```

4. Configure your frontend application to handle the magic link flow:
   - Create a page to request the magic link (email input)
   - Create a verification page to handle the magic link callback
   - Implement the Cognito custom authentication flow in your application

### Environment Variables

Create a `.env.local` file in the root of your web application with the following variables:

```
# AWS Cognito Configuration
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_xxxxxxxxx
NEXT_PUBLIC_COGNITO_APP_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_COGNITO_DOMAIN=your-domain.auth.us-east-1.amazoncognito.com

# Social Provider Client IDs
NEXT_PUBLIC_GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
NEXT_PUBLIC_FACEBOOK_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPLE_CLIENT_ID=com.yourdomain.service

# Authentication Redirect URLs
NEXT_PUBLIC_AUTH_REDIRECT_URL=https://yourdomain.com/auth/callback
NEXT_PUBLIC_AUTH_SIGN_OUT_URL=https://yourdomain.com/

# Magic Link Configuration
NEXT_PUBLIC_MAGIC_LINK_URL=https://yourdomain.com/auth/verify
```

For local development, you can use:

```
NEXT_PUBLIC_AUTH_REDIRECT_URL=http://localhost:4200/auth/callback
NEXT_PUBLIC_AUTH_SIGN_OUT_URL=http://localhost:4200/
```

### Authentication Flow Diagrams

#### 1. Passwordless Authentication Flow

```
┌─────────┐     ┌─────────────┐     ┌───────────┐     ┌─────────┐
│  User   │     │  Frontend   │     │  Cognito  │     │  Email  │
└────┬────┘     └──────┬──────┘     └─────┬─────┘     └────┬────┘
     │                 │                  │                │
     │  Enter Email    │                  │                │
     │────────────────>│                  │                │
     │                 │  Initiate Auth   │                │
     │                 │─────────────────>│                │
     │                 │                  │  Send Magic    │
     │                 │                  │  Link Email    │
     │                 │                  │───────────────>│
     │                 │                  │                │
     │  Click Magic    │                  │                │
     │  Link in Email  │                  │                │
     │<───────────────────────────────────────────────────│
     │                 │                  │                │
     │  Access with    │                  │                │
     │  Magic Link     │                  │                │
     │────────────────>│                  │                │
     │                 │  Verify Code     │                │
     │                 │─────────────────>│                │
     │                 │                  │                │
     │                 │  Return Tokens   │                │
     │                 │<─────────────────│                │
     │                 │                  │                │
     │  Authenticated  │                  │                │
     │<────────────────│                  │                │
     │                 │                  │                │
```

#### 2. Social Login Flow

```
┌─────────┐     ┌─────────────┐     ┌───────────┐     ┌─────────────┐
│  User   │     │  Frontend   │     │  Cognito  │     │  Social     │
└────┬────┘     └──────┬──────┘     └─────┬─────┘     │  Provider   │
     │                 │                  │           └──────┬──────┘
     │  Click Social   │                  │                  │
     │  Login Button   │                  │                  │
     │────────────────>│                  │                  │
     │                 │  Redirect to     │                  │
     │                 │  Social Provider │                  │
     │                 │─────────────────────────────────────>
     │                 │                  │                  │
     │  Authenticate   │                  │                  │
     │  with Provider  │                  │                  │
     │─────────────────────────────────────────────────────>│
     │                 │                  │                  │
     │                 │                  │  Auth Token      │
     │                 │                  │<─────────────────│
     │                 │                  │                  │
     │                 │  Redirect with   │                  │
     │                 │  Auth Code       │                  │
     │<────────────────────────────────────────────────────┐│
     │                 │                  │                  │
     │  Complete Auth  │                  │                  │
     │  with Code      │                  │                  │
     │────────────────>│                  │                  │
     │                 │  Exchange Code   │                  │
     │                 │  for Tokens      │                  │
     │                 │─────────────────>│                  │
     │                 │                  │                  │
     │                 │  Return Tokens   │                  │
     │                 │<─────────────────│                  │
     │                 │                  │                  │
     │  Authenticated  │                  │                  │
     │<────────────────│                  │                  │
     │                 │                  │                  │
```

### Troubleshooting Common Authentication Issues

#### 1. CORS Issues

**Symptom**: Authentication requests fail with CORS errors in the browser console.

**Solution**:
- Ensure your Cognito User Pool has the correct allowed origins configured
- Check that your application is using the exact domain that's configured in Cognito
- For local development, add `http://localhost:4200` to the allowed origins

#### 2. Redirect URI Mismatch

**Symptom**: After social login, you get an error about redirect URI mismatch.

**Solution**:
- Verify that the redirect URI in your application exactly matches what's configured in:
  - AWS Cognito App Client settings
  - Social provider developer console
- Check for trailing slashes, protocol differences (http vs https), or port numbers

#### 3. Token Refresh Issues

**Symptom**: Users are frequently logged out or sessions expire unexpectedly.

**Solution**:
- Check the refresh token expiration in Cognito (default is 30 days)
- Ensure your application is properly handling token refresh
- Verify that secure HTTP-only cookies are being used to store tokens
- Check for clock skew between your server and AWS

#### 4. Magic Link Expiration

**Symptom**: Magic links don't work or expire too quickly.

**Solution**:
- Increase the expiration time in your Lambda function
- Check that the user is clicking the link from the same device/browser
- Verify that your verification page is correctly handling the parameters

#### 5. Social Login Button Not Working

**Symptom**: Clicking on social login buttons doesn't redirect to the provider.

**Solution**:
- Check browser console for JavaScript errors
- Verify that the correct client IDs are configured in your environment variables
- Ensure the social provider is properly configured in Cognito
- Verify that the provider's developer account is in good standing

#### 6. Email Delivery Issues

**Symptom**: Magic link emails are not being received.

**Solution**:
- Check spam/junk folders
- Verify SES configuration and sending limits
- Ensure the email address is verified in SES if in sandbox mode
- Check Lambda function logs for email sending errors

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
