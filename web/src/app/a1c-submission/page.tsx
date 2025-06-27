'use client';

import React from 'react';
import { A1CSubmissionForm } from '../components/a1c-submission-form';
import { Navbar } from '../components/navbar';

export default function A1CSubmissionPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <A1CSubmissionForm />
      </main>
    </div>
  );
}