'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export function AuthButton({ 
  children, 
  isLoading = false, 
  variant = 'primary', 
  fullWidth = true,
  className = '', 
  disabled = false,
  ...props 
}: AuthButtonProps) {
  const baseStyles = "flex justify-center items-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors";
  
  const variantStyles = {
    primary: "border-transparent text-white bg-indigo-600 hover:bg-indigo-700",
    secondary: "border-transparent text-white bg-gray-600 hover:bg-gray-700",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <LoadingSpinner size="sm" />
          <span className="ml-2">Loading...</span>
        </span>
      ) : children}
    </button>
  );
}