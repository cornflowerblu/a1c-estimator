'use client';

import React, { useState } from 'react';
import { UserInfoStep } from './UserInfoStep';
import { A1CReadingsStep } from './A1CReadingsStep';
import { ReviewStep } from './ReviewStep';
import { useAuth } from '@a1c/auth';

// Define the form data structure
export interface A1CSubmissionFormData {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  readings: Array<{
    value: number;
    date: string;
    notes?: string;
  }>;
}

// Define the steps of the form
enum FormStep {
  UserInfo = 0,
  A1CReadings = 1,
  Review = 2,
  Complete = 3,
}

export function A1CSubmissionForm() {
  // Get authenticated user if available
  const { user } = useAuth();
  
  // Initialize form state
  const [formData, setFormData] = useState<A1CSubmissionFormData>({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    userId: user?.id || '',
    readings: [{ value: 0, date: new Date().toISOString().split('T')[0] }],
  });
  
  // Track the current step
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.UserInfo);
  
  // Track form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle form data updates
  const updateFormData = (data: Partial<A1CSubmissionFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Navigate to the next step
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1 as FormStep);
  };

  // Navigate to the previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1 as FormStep);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const response = await fetch('/api/a1c-calculations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit A1C calculation');
      }
      
      setSuccess(true);
      setCurrentStep(FormStep.Complete);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the appropriate step based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case FormStep.UserInfo:
        return (
          <UserInfoStep 
            formData={formData} 
            updateFormData={updateFormData} 
            onNext={nextStep} 
          />
        );
      case FormStep.A1CReadings:
        return (
          <A1CReadingsStep 
            formData={formData} 
            updateFormData={updateFormData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        );
      case FormStep.Review:
        return (
          <ReviewStep 
            formData={formData} 
            onSubmit={handleSubmit} 
            onBack={prevStep} 
            isSubmitting={isSubmitting}
            error={error}
          />
        );
      case FormStep.Complete:
        return (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="mt-3 text-lg font-medium text-gray-900">Submission Successful!</h2>
            <p className="mt-2 text-sm text-gray-500">
              Your A1C calculation has been submitted successfully.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  // Reset form
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    userId: '',
                    readings: [{ value: 0, date: new Date().toISOString().split('T')[0] }],
                  });
                  setCurrentStep(FormStep.UserInfo);
                  setSuccess(false);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Another
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Render progress indicator
  const renderProgress = () => {
    const steps = [
      { name: 'User Information', status: currentStep >= FormStep.UserInfo ? 'current' : 'upcoming' },
      { name: 'A1C Readings', status: currentStep >= FormStep.A1CReadings ? 'current' : 'upcoming' },
      { name: 'Review', status: currentStep >= FormStep.Review ? 'current' : 'upcoming' },
    ];

    return (
      <nav aria-label="Progress" className="mb-8">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              <div
                className={`flex flex-col border-l-4 ${
                  currentStep > index
                    ? 'border-indigo-600 md:border-l-0 md:border-t-4'
                    : currentStep === index
                    ? 'border-indigo-600 md:border-l-0 md:border-t-4'
                    : 'border-gray-200 md:border-l-0 md:border-t-4'
                } py-2 pl-4 md:pl-0 md:pt-4 md:pb-0`}
              >
                <span
                  className={`text-xs font-semibold tracking-wide uppercase ${
                    currentStep > index
                      ? 'text-indigo-600'
                      : currentStep === index
                      ? 'text-indigo-600'
                      : 'text-gray-500'
                  }`}
                >
                  Step {index + 1}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">A1C Calculation Submission</h1>
      
      {currentStep < FormStep.Complete && renderProgress()}
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}