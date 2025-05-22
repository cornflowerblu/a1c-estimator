import NextAuth from "next-auth";
import { authOptions } from "@a1c/auth";

/**
 * NextAuth API route handler
 * 
 * This route handles all NextAuth.js authentication requests.
 * It uses the authOptions from the @a1c/auth library, which includes:
 * - Mock/Real Cognito provider (based on configuration)
 * - Email provider (magic links)
 * - Social providers (Google, Apple, Facebook)
 * 
 * To toggle between mock and real Cognito:
 * - Set USE_MOCK_COGNITO=true in your environment for mock authentication
 * - Set USE_MOCK_COGNITO=false in your environment for real Cognito
 * - By default, mock is used in development and real in production
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };