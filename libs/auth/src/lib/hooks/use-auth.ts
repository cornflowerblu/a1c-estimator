'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { AuthUser } from "../types";

export function useAuth() {
  const { data: session, status } = useSession();
  
  const user: AuthUser | null = session?.user ? {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  } : null;

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
  };
}
