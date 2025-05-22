/**
 * Session Provider Component
 * 
 * Wraps the application with NextAuth SessionProvider to enable authentication state management.
 */
import { SessionProvider as NextAuthSessionProvider, SessionProviderProps as NextAuthSessionProviderProps } from "next-auth/react";
import { PropsWithChildren } from "react";

export interface SessionProviderProps extends PropsWithChildren<Omit<NextAuthSessionProviderProps, 'children'>> {}

/**
 * SessionProvider component that wraps NextAuth's SessionProvider
 * 
 * @param props Component props including children and NextAuth session options
 * @returns SessionProvider component
 */
export function SessionProvider({ children, ...props }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider {...props}>
      {children}
    </NextAuthSessionProvider>
  );
}

export default SessionProvider;
