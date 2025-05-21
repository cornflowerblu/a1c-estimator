'use client';

import { ProtectedRoute } from '@a1c/ui';
import { useAuth } from '@a1c/auth';
import { useState } from 'react';

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [diabetesType, setDiabetesType] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [targetA1C, setTargetA1C] = useState('');
  const [preferredUnit, setPreferredUnit] = useState('MGDL');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the API call to update the user profile
    console.log('Profile update submitted', {
      name,
      diabetesType,
      birthYear,
      targetA1C,
      preferredUnit
    });
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Your Profile</h1>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Update your personal details and preferences.</p>
              </div>
              
              <div className="border-t border-gray-200">
                <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={user?.email || ''}
                        disabled
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
                      />
                      <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="diabetesType" className="block text-sm font-medium text-gray-700">Diabetes Type</label>
                      <select
                        id="diabetesType"
                        name="diabetesType"
                        value={diabetesType}
                        onChange={(e) => setDiabetesType(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="TYPE_1">Type 1</option>
                        <option value="TYPE_2">Type 2</option>
                        <option value="GESTATIONAL">Gestational</option>
                        <option value="PREDIABETES">Prediabetes</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700">Birth Year</label>
                      <input
                        type="number"
                        name="birthYear"
                        id="birthYear"
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. 1980"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="targetA1C" className="block text-sm font-medium text-gray-700">Target A1C (%)</label>
                      <input
                        type="number"
                        name="targetA1C"
                        id="targetA1C"
                        value={targetA1C}
                        onChange={(e) => setTargetA1C(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. 6.5"
                        step="0.1"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="preferredUnit" className="block text-sm font-medium text-gray-700">Preferred Glucose Unit</label>
                      <select
                        id="preferredUnit"
                        name="preferredUnit"
                        value={preferredUnit}
                        onChange={(e) => setPreferredUnit(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="MGDL">mg/dL</option>
                        <option value="MMOLL">mmol/L</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
