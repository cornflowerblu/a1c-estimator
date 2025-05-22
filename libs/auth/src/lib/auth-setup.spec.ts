import * as fs from 'fs';
import * as path from 'path';

describe('Authentication Setup Instructions', () => {
  let readmeContent: string;

  beforeAll(() => {
    // Read the README.md file
    const readmePath = path.join(process.cwd(), 'README.md');
    readmeContent = fs.readFileSync(readmePath, 'utf8');
  });

  describe('README.md Authentication Section', () => {
    it('should include AWS Cognito configuration instructions', () => {
      expect(readmeContent).toContain('AWS Cognito Configuration');
      expect(readmeContent).toContain('Create a User Pool');
      expect(readmeContent).toContain('Configure Environment Variables');
      expect(readmeContent).toContain('NEXT_PUBLIC_AWS_REGION');
      expect(readmeContent).toContain('NEXT_PUBLIC_COGNITO_USER_POOL_ID');
      expect(readmeContent).toContain('NEXT_PUBLIC_COGNITO_CLIENT_ID');
    });

    it('should include social provider integration instructions', () => {
      expect(readmeContent).toContain('Social Provider Integration');
      expect(readmeContent).toContain('Google Authentication');
      expect(readmeContent).toContain('Apple Authentication');
      expect(readmeContent).toContain('Facebook Authentication');
      expect(readmeContent).toContain('GOOGLE_CLIENT_ID');
      expect(readmeContent).toContain('APPLE_ID');
      expect(readmeContent).toContain('FACEBOOK_CLIENT_ID');
    });

    it('should include magic link email setup instructions', () => {
      expect(readmeContent).toContain('Magic Link Email Setup');
      expect(readmeContent).toContain('Configure Email Provider');
      expect(readmeContent).toContain('EMAIL_SERVER_HOST');
      expect(readmeContent).toContain('EMAIL_FROM');
    });

    it('should include environment variable templates', () => {
      expect(readmeContent).toContain('Environment Variables Template');
      expect(readmeContent).toContain('.env.local');
    });

    it('should include authentication flow diagrams', () => {
      expect(readmeContent).toContain('Authentication Flow Diagrams');
      expect(readmeContent).toContain('Email Magic Link Flow');
      expect(readmeContent).toContain('Social Provider Authentication Flow');
    });

    it('should include troubleshooting section', () => {
      expect(readmeContent).toContain('Troubleshooting Authentication Issues');
      expect(readmeContent).toContain('Common Cognito Configuration Issues');
      expect(readmeContent).toContain('Social Provider Issues');
      expect(readmeContent).toContain('Magic Link Email Issues');
      expect(readmeContent).toContain('Session Issues');
    });
  });

  describe('Environment Variables Consistency', () => {
    it('should have consistent environment variable names in the README and code', () => {
      // Get all environment variable names from the README
      const envVarRegex = /\b(NEXT_PUBLIC_[A-Z_]+|[A-Z_]+_CLIENT_ID|[A-Z_]+_CLIENT_SECRET|EMAIL_[A-Z_]+)\b/g;
      const readmeEnvVars = Array.from(new Set(Array.from(readmeContent.matchAll(envVarRegex)).map(match => match[0])));
      
      // Check for key environment variables
      const requiredEnvVars = [
        'NEXT_PUBLIC_AWS_REGION',
        'NEXT_PUBLIC_COGNITO_USER_POOL_ID',
        'NEXT_PUBLIC_COGNITO_CLIENT_ID',
        'COGNITO_CLIENT_SECRET',
        'GOOGLE_CLIENT_ID',
        'GOOGLE_CLIENT_SECRET',
        'APPLE_ID',
        'APPLE_TEAM_ID',
        'APPLE_PRIVATE_KEY',
        'APPLE_KEY_ID',
        'FACEBOOK_CLIENT_ID',
        'FACEBOOK_CLIENT_SECRET',
        'EMAIL_SERVER_HOST',
        'EMAIL_SERVER_PORT',
        'EMAIL_SERVER_USER',
        'EMAIL_SERVER_PASSWORD',
        'EMAIL_FROM',
        'NEXTAUTH_URL',
        'NEXTAUTH_SECRET'
      ];
      
      // Ensure all required environment variables are in the README
      for (const envVar of requiredEnvVars) {
        expect(readmeEnvVars.includes(envVar)).toBe(true);
      }
    });
  });
});