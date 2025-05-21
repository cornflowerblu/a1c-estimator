'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsEmailSending(true);

    try {
      // For email, use our custom API route
      if (email) {
        // First try the built-in NextAuth email provider
        const result = await signIn("email", {
          email,
          redirect: false,
          callbackUrl: "/"
        });

        // If it fails (client-side), use our server API route
        if (!result?.ok) {
          const response = await fetch('/api/auth/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });

          if (response.ok) {
            setEmailSent(true);
          }
        } else {
          setEmailSent(true);
        }
      }
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsEmailSending(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/" });
  };

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
        <h2 className="text-center text-3xl font-bold">Sign in to your account</h2>

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
              disabled={isEmailSending}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {isEmailSending ? 'Sending...' : 'Sign in with Email'}
            </button>
          </div>
        </form>

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