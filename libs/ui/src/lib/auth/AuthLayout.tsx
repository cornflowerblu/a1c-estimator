'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900">A1C Estimator</span>
          </Link>
        </div>
        
        {title && (
          <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        {children}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} A1C Estimator. All rights reserved.
        </p>
      </div>
    </div>
  );
}