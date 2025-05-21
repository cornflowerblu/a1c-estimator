import { DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

// Extend the built-in JWT types
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    // Add any other properties you need
  }
}

// Define user role types
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface AuthUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: UserRole;
}