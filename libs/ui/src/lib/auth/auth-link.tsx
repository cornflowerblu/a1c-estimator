import React from 'react';

export interface AuthLinkProps {
  href: string;
  children: React.ReactNode;
}

export function AuthLink({ href, children }: AuthLinkProps) {
  return (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
    >
      {children}
    </a>
  );
}