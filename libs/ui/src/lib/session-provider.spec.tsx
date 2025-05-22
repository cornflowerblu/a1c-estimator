'use client';

import React from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from './session-provider';

describe('SessionProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SessionProvider>
        <div>Test Content</div>
      </SessionProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const { getByText } = render(
      <SessionProvider>
        <div>Test Content</div>
      </SessionProvider>
    );
    expect(getByText('Test Content')).toBeTruthy();
  });
});