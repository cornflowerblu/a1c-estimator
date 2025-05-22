import React from 'react';

export interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
      <div className="p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}