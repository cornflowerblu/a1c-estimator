import React from 'react';

export interface AuthSocialButtonProps {
  provider: 'google' | 'apple' | 'facebook';
  onClick: () => void;
}

export function AuthSocialButton({ provider, onClick }: AuthSocialButtonProps) {
  const providerConfig = {
    google: {
      name: 'Google',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
        </svg>
      ),
      bgColor: 'bg-white hover:bg-gray-50',
      textColor: 'text-gray-700',
      borderColor: 'border-gray-300',
    },
    apple: {
      name: 'Apple',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.23,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
        </svg>
      ),
      bgColor: 'bg-black hover:bg-gray-900',
      textColor: 'text-white',
      borderColor: 'border-black',
    },
    facebook: {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
        </svg>
      ),
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white',
      borderColor: 'border-blue-600',
    },
  };

  const config = providerConfig[provider];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center w-full px-4 py-2 ${config.bgColor} ${config.textColor} border ${config.borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
    >
      <span className="mr-2">{config.icon}</span>
      <span>Continue with {config.name}</span>
    </button>
  );
}