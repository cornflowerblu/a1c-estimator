import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  variant = 'primary',
  fullWidth = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative flex justify-center items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none transition-colors duration-150 ease-in-out';
  
  const variantStyles = {
    primary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    secondary: 'border-transparent text-white bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
    outline: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = (disabled || isLoading) ? 'opacity-70 cursor-not-allowed' : '';

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      <span className={isLoading ? 'pl-3' : ''}>{children}</span>
    </button>
  );
};

export default Button;