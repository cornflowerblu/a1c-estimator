'use client';

import React, { useState } from 'react';
import { A1CSubmissionFormData } from './index';

interface A1CReadingsStepProps {
  formData: A1CSubmissionFormData;
  updateFormData: (data: Partial<A1CSubmissionFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function A1CReadingsStep({ formData, updateFormData, onNext, onBack }: A1CReadingsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update a specific reading
  const updateReading = (index: number, field: string, value: string | number) => {
    const updatedReadings = [...formData.readings];
    updatedReadings[index] = {
      ...updatedReadings[index],
      [field]: value,
    };
    updateFormData({ readings: updatedReadings });
  };

  // Add a new reading
  const addReading = () => {
    updateFormData({
      readings: [
        ...formData.readings,
        { value: 0, date: new Date().toISOString().split('T')[0] },
      ],
    });
  };

  // Remove a reading
  const removeReading = (index: number) => {
    if (formData.readings.length > 1) {
      const updatedReadings = formData.readings.filter((_, i) => i !== index);
      updateFormData({ readings: updatedReadings });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Check if there's at least one reading
    if (formData.readings.length === 0) {
      newErrors.readings = 'At least one A1C reading is required';
    }
    
    // Validate each reading
    formData.readings.forEach((reading, index) => {
      if (reading.value <= 0) {
        newErrors[`reading_${index}_value`] = 'A1C value must be greater than 0';
      }
      if (!reading.date) {
        newErrors[`reading_${index}_date`] = 'Date is required';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">A1C Readings</h2>
        <p className="text-sm text-gray-500">
          Please enter your A1C readings. You can add multiple readings if needed.
        </p>
      </div>

      {formData.readings.map((reading, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">Reading #{index + 1}</h3>
            {formData.readings.length > 1 && (
              <button
                type="button"
                onClick={() => removeReading(index)}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* A1C Value */}
            <div className="sm:col-span-3">
              <label htmlFor={`reading-${index}-value`} className="block text-sm font-medium text-gray-700">
                A1C Value (%)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id={`reading-${index}-value`}
                  name={`reading-${index}-value`}
                  value={reading.value}
                  onChange={(e) => updateReading(index, 'value', parseFloat(e.target.value) || 0)}
                  step="0.1"
                  min="0"
                  className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    errors[`reading_${index}_value`] ? 'border-red-300' : ''
                  }`}
                />
                {errors[`reading_${index}_value`] && (
                  <p className="mt-2 text-sm text-red-600">{errors[`reading_${index}_value`]}</p>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="sm:col-span-3">
              <label htmlFor={`reading-${index}-date`} className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  id={`reading-${index}-date`}
                  name={`reading-${index}-date`}
                  value={reading.date}
                  onChange={(e) => updateReading(index, 'date', e.target.value)}
                  className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    errors[`reading_${index}_date`] ? 'border-red-300' : ''
                  }`}
                />
                {errors[`reading_${index}_date`] && (
                  <p className="mt-2 text-sm text-red-600">{errors[`reading_${index}_date`]}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div className="sm:col-span-6">
              <label htmlFor={`reading-${index}-notes`} className="block text-sm font-medium text-gray-700">
                Notes (Optional)
              </label>
              <div className="mt-1">
                <textarea
                  id={`reading-${index}-notes`}
                  name={`reading-${index}-notes`}
                  value={reading.notes || ''}
                  onChange={(e) => updateReading(index, 'notes', e.target.value)}
                  rows={2}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Any additional information about this reading"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {errors.readings && (
        <p className="mt-2 text-sm text-red-600">{errors.readings}</p>
      )}

      <div>
        <button
          type="button"
          onClick={addReading}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Another Reading
        </button>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  );
}