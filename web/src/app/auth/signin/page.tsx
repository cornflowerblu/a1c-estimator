'use client';

import { useAuth } from "@a1c/auth";
import { useState } from "react";
import Link from "next/link";

// Authentication mode enum
enum AuthMode {
  EMAIL = "email",
  COGNITO_LOGIN = "cognito_login",
  COGNITO_REGISTER = "cognito_register",
}

export default function SignIn() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  
  // State for UI
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.COGNITO_LOGIN);
  const [emailSent, setEmailSent] = useState(false);
  
  // Get authentication methods from our custom hook
  const { 
    signInWithEmail, 
    signInWithCognito, 
    registerWithCognito, 
    signInWithProvider,
    isLoading,
    error,
    resetError
  } = useAuth();

  // Handle email sign-in
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    resetError();

    if (email) {
      const result = await signInWithEmail(email);
      if (result.success) {
        setEmailSent(true);
      }
    }
  };

  // Handle Cognito sign-in
  const handleCognitoSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    resetError();

    if (username && password) {
      await signInWithCognito({ 
        usernameOrEmail: username, 
        password 
      });
    }
  };

  // Handle Cognito registration
  const handleCognitoRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    resetError();

    if (password !== confirmPassword) {
      // Handle password mismatch
      return;
    }

    if (username && email && password) {
      await registerWithCognito({
        username,
        email,
        password,
        name: name || undefined,
      });
    }
  };

  // Handle social provider sign-in
  const handleSocialSignIn = (provider: string) => {
    resetError();
    signInWithProvider(provider);
  };

  // Switch between authentication modes
  const switchAuthMode = (mode: AuthMode) => {
    resetError();
    setAuthMode(mode);
  };

  // If email magic link was sent, show confirmation
  if (emailSent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-bold">Check your email</h2>
          <p className="text-center">
            We've sent a sign-in link to {email}. Please check your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-bold">
          {authMode === AuthMode.EMAIL && "Sign in with Email"}
          {authMode === AuthMode.COGNITO_LOGIN && "Sign in to your account"}
          {authMode === AuthMode.COGNITO_REGISTER && "Create an account"}
        </h2>

        {/* Show error message if any */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error.message}</span>
          </div>
        )}

        {/* Authentication mode tabs */}
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${authMode === AuthMode.COGNITO_LOGIN ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => switchAuthMode(AuthMode.COGNITO_LOGIN)}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 ${authMode === AuthMode.COGNITO_REGISTER ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => switchAuthMode(AuthMode.COGNITO_REGISTER)}
          >
            Register
          </button>
          <button
            className={`py-2 px-4 ${authMode === AuthMode.EMAIL ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => switchAuthMode(AuthMode.EMAIL)}
          >
            Email Link
          </button>
        </div>

        {/* Email Magic Link Form */}
        {authMode === AuthMode.EMAIL && (
          <form className="mt-8 space-y-6" onSubmit={handleEmailSignIn}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                {isLoading ? 'Sending...' : 'Send Magic Link'}
              </button>
            </div>
          </form>
        )}

        {/* Cognito Login Form */}
        {authMode === AuthMode.COGNITO_LOGIN && (
          <form className="mt-8 space-y-6" onSubmit={handleCognitoSignIn}>
            <div>
              <label htmlFor="username" className="sr-only">Username or Email</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        )}

        {/* Cognito Registration Form */}
        {authMode === AuthMode.COGNITO_REGISTER && (
          <form className="mt-8 space-y-6" onSubmit={handleCognitoRegister}>
            <div>
              <label htmlFor="register-name" className="sr-only">Full Name</label>
              <input
                id="register-name"
                name="name"
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="register-username" className="sr-only">Username</label>
              <input
                id="register-username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="register-email" className="sr-only">Email</label>
              <input
                id="register-email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="register-password" className="sr-only">Password</label>
              <input
                id="register-password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="register-confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="register-confirm-password"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password !== confirmPassword && confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || (password !== confirmPassword && confirmPassword !== "")}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        )}

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              onClick={() => handleSocialSignIn("google")}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Google
            </button>
            <button
              onClick={() => handleSocialSignIn("apple")}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Apple
            </button>
            <button
              onClick={() => handleSocialSignIn("facebook")}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}