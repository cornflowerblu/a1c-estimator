import React, { useState } from 'react';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

/**
 * Props for the AuthToggle component
 */
export interface AuthToggleProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

/**
 * Component that toggles between login and register forms
 */
export function AuthToggle({ onSuccess, onError }: AuthToggleProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 text-center ${
            isLogin
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setIsLogin(true)}
        >
          Log In
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            !isLogin
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      {isLogin ? (
        <LoginForm onSuccess={onSuccess} onError={onError} />
      ) : (
        <RegisterForm onSuccess={onSuccess} onError={onError} />
      )}
    </div>
  );
}