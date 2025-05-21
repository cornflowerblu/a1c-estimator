import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import { prisma } from "@a1c/db";

// This file is only imported on the server side
export const serverAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Email Magic Link (passwordless)
    EmailProvider({
      server: {
        host: process.env['EMAIL_SERVER_HOST'] || "",
        port: Number(process.env['EMAIL_SERVER_PORT']) || 587,
        auth: {
          user: process.env['EMAIL_SERVER_USER'] || "",
          pass: process.env['EMAIL_SERVER_PASSWORD'] || "",
        },
      },
      from: process.env['EMAIL_FROM'] || "noreply@example.com",
    }),
    // Social providers
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
        token.id = user.id;
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
};
