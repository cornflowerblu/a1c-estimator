/**
 * Authentication Configuration
 * 
 * This file contains configuration settings for the authentication system.
 * It allows toggling between mock and real AWS Cognito authentication.
 */

/**
 * Authentication mode configuration
 * 
 * Set to 'mock' for development with mock authentication
 * Set to 'cognito' for production with real AWS Cognito
 */
export type AuthMode = 'mock' | 'cognito';

/**
 * Current authentication mode
 * 
 * Change this value to switch between mock and real authentication
 */
export const AUTH_MODE: AuthMode = 'mock';

/**
 * AWS Cognito configuration
 * 
 * These values are used when AUTH_MODE is set to 'cognito'
 */
export const COGNITO_CONFIG = {
  // Replace these values with your actual AWS Cognito configuration
  region: process.env['NEXT_PUBLIC_AWS_REGION'] || 'us-east-1',
  userPoolId: process.env['NEXT_PUBLIC_COGNITO_USER_POOL_ID'] || '',
  userPoolWebClientId: process.env['NEXT_PUBLIC_COGNITO_CLIENT_ID'] || '',
  oauth: {
    domain: process.env['NEXT_PUBLIC_COGNITO_DOMAIN'] || '',
    scope: ['email', 'profile', 'openid'],
    redirectSignIn: process.env['NEXT_PUBLIC_REDIRECT_SIGN_IN'] || 'http://localhost:3000/',
    redirectSignOut: process.env['NEXT_PUBLIC_REDIRECT_SIGN_OUT'] || 'http://localhost:3000/',
    responseType: 'code',
  },
};

/**
 * Check if using real Cognito authentication
 */
export const isUsingRealCognito = (): boolean => {
  return AUTH_MODE === 'cognito' as AuthMode;
};

/**
 * Instructions for connecting to real AWS Cognito
 * 
 * This is a helper function that returns instructions for developers
 * on how to connect to real AWS Cognito when they're ready.
 */
export const getCognitoConnectionInstructions = (): string => {
  return `
To connect to real AWS Cognito authentication:

1. Create an AWS Cognito User Pool in your AWS account
2. Create an App Client in the User Pool
3. Set the following environment variables:
   - NEXT_PUBLIC_AWS_REGION=<your-aws-region>
   - NEXT_PUBLIC_COGNITO_USER_POOL_ID=<your-user-pool-id>
   - NEXT_PUBLIC_COGNITO_CLIENT_ID=<your-app-client-id>
   - NEXT_PUBLIC_COGNITO_DOMAIN=<your-cognito-domain>
   - NEXT_PUBLIC_REDIRECT_SIGN_IN=<your-sign-in-redirect-url>
   - NEXT_PUBLIC_REDIRECT_SIGN_OUT=<your-sign-out-redirect-url>
4. Change the AUTH_MODE in auth.config.ts from 'mock' to 'cognito'
5. Install AWS Amplify: npm install aws-amplify
6. Configure AWS Amplify in your app's entry point:

   import { Amplify } from 'aws-amplify';
   import { COGNITO_CONFIG } from '@a1c/services';
   
   Amplify.configure({
     Auth: {
       region: COGNITO_CONFIG.region,
       userPoolId: COGNITO_CONFIG.userPoolId,
       userPoolWebClientId: COGNITO_CONFIG.userPoolWebClientId,
       oauth: COGNITO_CONFIG.oauth,
     },
   });

7. Update the auth.service.ts file to use the real Cognito implementations
`;
};