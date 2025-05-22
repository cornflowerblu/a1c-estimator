import React from 'react';
import { useAuth } from '@a1c/services';

/**
 * Component that displays the current authentication status
 */
export function AuthStatus() {
  const { user, isAuthenticated, isLoading, logout, error } = useAuth();

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
        <p className="text-gray-600">Loading authentication status...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <p className="font-bold">Authenticated</p>
        <p>
          <span className="font-semibold">Name:</span> {user.name || 'Not provided'}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <button
          onClick={() => logout()}
          className="mt-3 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
      <p>Not authenticated. Please log in or register.</p>
    </div>
  );
}