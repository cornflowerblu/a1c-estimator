import React from 'react';

export interface AuthLoadingProps {
  message?: string;
}

export function AuthLoading({ message = 'Loading...' }: AuthLoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-3"></div>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}