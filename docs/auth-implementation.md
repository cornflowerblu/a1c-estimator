# Authentication Implementation Documentation

This document outlines the authentication implementation for the A1C Estimator application, including components, configuration, and testing instructions.

## Table of Contents
1. [Authentication Configuration](#authentication-configuration)
2. [Authentication Pages](#authentication-pages)
3. [Protected Routes](#protected-routes)
4. [User Interface Components](#user-interface-components)
5. [Authentication Hooks](#authentication-hooks)
6. [Integration with Prisma](#integration-with-prisma)
7. [Testing Instructions](#testing-instructions)
8. [Troubleshooting](#troubleshooting)

## Authentication Configuration

### Auth Options Configuration
**File**: `/libs/auth/src/lib/auth.ts`

The main authentication configuration is centralized in this file, which exports `authOptions` for NextAuth.js:

```typescript
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Email Magic Link (passwordless)
    EmailProvider({...}),
    // Social providers
    GoogleProvider({...}),
    AppleProvider({...}),
    FacebookProvider({...}),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {...},
    async jwt({ token, user }) {...},
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
};
```

### NextAuth API Route
**File**: `/web/src/app/api/[...nextauth]/route.ts`

This file imports the auth options and creates the NextAuth handler:

```typescript
import NextAuth from "next-auth";
import { authOptions } from "@a1c/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

## Authentication Pages

### Sign In Page
**File**: `/web/src/app/auth/signin/page.tsx`

Provides email magic link authentication and social login options.

### Sign Out Page
**File**: `/web/src/app/auth/signout/page.tsx`

Handles user sign out with a loading state.

### Error Page
**File**: `/web/src/app/auth/error/page.tsx`

Displays authentication errors with specific messages based on error type.

### Verify Request Page
**File**: `/web/src/app/auth/verify-request/page.tsx`

Shown after a user requests an email magic link.

## Protected Routes

### Middleware
**File**: `/web/src/app/middleware.ts`

Protects specific routes requiring authentication:

```typescript
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/readings/:path*",
    "/runs/:path*",
    "/months/:path*",
    "/profile/:path*",
  ],
};
```

### Protected Route Component
**File**: `/libs/auth/src/lib/components/protected-route.tsx`

React component that wraps protected content and redirects unauthenticated users:

```typescript
export function ProtectedRoute({ 
  children, 
  redirectTo = "/auth/signin" 
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, redirectTo, router]);

  // Component implementation...
}
```

## User Interface Components

### User Menu
**File**: `/libs/ui/src/lib/user-menu/user-menu.tsx`

Displays user information and authentication options:
- Shows sign-in link for unauthenticated users
- Shows user avatar/initial, name, and dropdown menu for authenticated users
- Provides links to profile, dashboard, and sign out

### Navigation Bar
**File**: `/web/src/app/components/navbar.tsx`

Main navigation with authentication-aware links.

### Auth Provider
**File**: `/libs/ui/src/lib/session-provider.tsx`

Wraps the application with NextAuth's SessionProvider:

```typescript
export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

## Authentication Hooks

### useAuth Hook
**File**: `/libs/auth/src/lib/hooks/use-auth.ts`

Custom hook for accessing authentication state:

```typescript
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
```

### Authentication Types
**File**: `/libs/auth/src/lib/types.ts`

Extended types for NextAuth session and user:

```typescript
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
```

## Integration with Prisma

### Prisma Schema
**File**: `/libs/db/schema/prisma/schema.prisma`

The schema includes NextAuth.js required models:
- User
- Account
- Session
- VerificationToken

Plus application-specific models that relate to the User model.

## Testing Instructions

### Prerequisites
1. Ensure environment variables are set in `.env.local`:
   - `NEXTAUTH_URL` and `NEXTAUTH_SECRET`
   - Email provider settings
   - OAuth provider credentials

### Test Authentication Flow
1. Start the development server:
   ```bash
   npx nx serve web
   ```

2. Test sign-in functionality:
   - Email magic link
   - Social providers (if configured)

3. Test protected routes:
   - Try accessing `/dashboard` when not authenticated (should redirect)
   - Sign in and verify access to protected routes

4. Test sign-out functionality:
   - Click sign out and verify redirection
   - Try accessing protected routes after sign-out

### Test User Profile
1. Sign in and navigate to `/profile`
2. Test updating user information

## Troubleshooting

### Common Issues

#### OAuth Provider Issues
- Check that provider credentials are correctly set in `.env.local`
- Verify callback URLs are correctly configured in provider developer consoles
- Check for CORS issues if using custom domains

#### Email Provider Issues
- Verify SMTP settings in `.env.local`
- Check spam folders for magic link emails
- Ensure `EMAIL_FROM` is properly formatted

#### JWT Issues
- Ensure `NEXTAUTH_SECRET` is set and consistent
- Check for session expiration issues

#### Database Issues
- Verify Prisma connection is working
- Check that all required tables exist
- Run `npx prisma migrate dev` if schema changes are needed

### Debugging Tips
1. Check browser console for client-side errors
2. Review server logs for API route errors
3. Use NextAuth.js debug mode by setting `debug: true` in authOptions
4. Verify environment variables are loaded correctly

---

If you encounter specific issues during testing, document them here with:
- Description of the issue
- Steps to reproduce
- Error messages
- Resolution (once found)
