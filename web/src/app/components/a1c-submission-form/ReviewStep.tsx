'use client';

import React from 'react';
import { A1CSubmissionFormData } from './index';

interface ReviewStepProps {
  formData: A1CSubmissionFormData;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export function ReviewStep({ formData, onSubmit, onBack, isSubmitting, error }: ReviewStepProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Review Your Information</h2>
        <p className="text-sm text-gray-500">
          Please review your information before submitting.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* User Information Section */}
      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">User Information</h3>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-gray-500">First Name</p>
            <p className="mt-1 text-sm text-gray-900">{formData.firstName}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-500">Last Name</p>
            <p className="mt-1 text-sm text-gray-900">{formData.lastName}</p>
          </div>
          
          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="mt-1 text-sm text-gray-900">{formData.email}</p>
          </div>
          
          {formData.userId && (
            <div className="sm:col-span-2">
              <p className="text-sm font-medium text-gray-500">User ID</p>
              <p className="mt-1 text-sm text-gray-900">{formData.userId}</p>
            </div>
          )}
        </div>
      </div>

      {/* A1C Readings Section */}
      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">A1C Readings</h3>
        
        {formData.readings.map((reading, index) => (
          <div key={index} className="border-t border-gray-200 pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Reading #{index + 1}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">A1C Value</p>
                <p className="mt-1 text-sm text-gray-900">{reading.value}%</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p className="mt-1 text-sm text-gray-900">{formatDate(reading.date)}</p>
              </div>
              
              {reading.notes && (
                <div className="sm:col-span-3">
                  <p className="text-sm font-medium text-gray-500">Notes</p>
                  <p className="mt-1 text-sm text-gray-900">{reading.notes}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back
        </button>
        
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}