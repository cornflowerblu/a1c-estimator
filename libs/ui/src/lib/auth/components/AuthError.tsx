'use client';

import React from 'react';

interface AuthErrorProps {
  message: string | null;
}

export function AuthError({ message }: AuthErrorProps) {
  if (!message) return null;
  
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
      {message}
    </div>
  );
}