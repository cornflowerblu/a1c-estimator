import NextAuth, { DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import { login as loginWithPassword, authenticateWithMagicLink, authenticateWithPasskey } from '@a1c/services';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Extend the session user type to include id
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

const handler = NextAuth({
  providers: [
    // Cognito credentials provider
    CredentialsProvider({
      id: 'cognito',
      name: 'Cognito',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await loginWithPassword(credentials.email, credentials.password || 'default-password');
          
          if (response.success && response.user) {
            return {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
              image: response.user.image,
            };
          }
          return null;
        } catch (error) {
          console.error('Error authenticating with Cognito:', error);
          return null;
        }
      },
    }),
    
    // Magic link provider
    CredentialsProvider({
      id: 'magic-link',
      name: 'Magic Link',
      credentials: {
        email: { label: 'Email', type: 'email' },
        token: { label: 'Token', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.token) {
          return null;
        }

        try {
          const response = await authenticateWithMagicLink(credentials.email, credentials.token);
          
          if (response.success && response.user) {
            return {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
            };
          }
          
          return null;
        } catch (error) {
          console.error('Error in magic link authorize:', error);
          return null;
        }
      },
    }),
    
    // Passkey provider
    CredentialsProvider({
      id: 'passkey',
      name: 'Passkey',
      credentials: {
        credential: { label: 'Credential', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.credential) {
          return null;
        }

        try {
          const credentialObj = JSON.parse(credentials.credential);
          const response = await authenticateWithPasskey(credentialObj);
          
          if (response.success && response.user) {
            return {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
            };
          }
          
          return null;
        } catch (error) {
          console.error('Error in passkey authorize:', error);
          return null;
        }
      },
    }),
    
    // Social providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID || '',
      clientSecret: process.env.APPLE_CLIENT_SECRET || '',
    }),
    
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }),
  ],
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    verifyRequest: '/verify',
    newUser: '/passkey-setup',
  },
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };