import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import { prisma } from "@a1c/db";
import { getCognitoProvider, cognitoConfig } from "./cognito-auth";

/**
 * Client-side auth options
 * 
 * This configuration includes:
 * - Social providers (Google, Apple, Facebook)
 * - Mock/Real Cognito provider (based on configuration)
 * 
 * To toggle between mock and real Cognito:
 * - Set USE_MOCK_COGNITO=true in your environment for mock authentication
 * - Set USE_MOCK_COGNITO=false in your environment for real Cognito
 * - By default, mock is used in development and real in production
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Cognito provider (mock or real based on configuration)
    getCognitoProvider(),
    
    // Social providers only for client-side
    GoogleProvider({
      clientId: process.env['GOOGLE_CLIENT_ID'] || "",
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'] || "",
    }),
    AppleProvider({
      clientId: process.env['APPLE_ID'] || "",
      clientSecret: process.env['APPLE_SECRET'] || "",
    }),
    FacebookProvider({
      clientId: process.env['FACEBOOK_CLIENT_ID'] || "",
      clientSecret: process.env['FACEBOOK_CLIENT_SECRET'] || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // Add user ID to session
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token["id"] = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  // Enable debug mode in development
  debug: process.env.NODE_ENV === "development",
};
