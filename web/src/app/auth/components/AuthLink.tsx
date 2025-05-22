import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AuthLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const AuthLink: React.FC<AuthLinkProps> = ({ href, children, className = '' }) => {
  return (
    <Link 
      href={href} 
      className={`font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150 ${className}`}
    >
      {children}
    </Link>
  );
};

export default AuthLink;