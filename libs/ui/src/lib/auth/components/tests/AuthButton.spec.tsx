'use client';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthButton } from '../AuthButton';

describe('AuthButton', () => {
  it('should render successfully', () => {
    const { getByRole } = render(<AuthButton>Test Button</AuthButton>);
    expect(getByRole('button')).toBeTruthy();
  });

  it('should disable button when loading', () => {
    const { getByRole } = render(<AuthButton isLoading>Test Button</AuthButton>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('should show loading spinner when loading', () => {
    const { getByRole } = render(<AuthButton isLoading>Test Button</AuthButton>);
    expect(getByRole('button')).toHaveTextContent('Loading...');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<AuthButton onClick={handleClick}>Test Button</AuthButton>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});