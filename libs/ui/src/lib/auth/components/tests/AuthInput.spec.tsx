'use client';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthInput } from '../AuthInput';

describe('AuthInput', () => {
  it('should render successfully', () => {
    const { getByLabelText } = render(
      <AuthInput label="Test Input" id="test" />
    );
    expect(getByLabelText('Test Input')).toBeTruthy();
  });

  it('should handle value changes', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <AuthInput
        label="Test Input"
        id="test"
        onChange={handleChange}
      />
    );
    fireEvent.change(getByLabelText('Test Input'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should show error message when provided', () => {
    const { getByText } = render(
      <AuthInput
        label="Test Input"
        id="test"
        error="This is an error"
      />
    );
    expect(getByText('This is an error')).toBeTruthy();
  });

  it('should apply disabled styles when disabled', () => {
    const { getByLabelText } = render(
      <AuthInput
        label="Test Input"
        id="test"
        disabled
      />
    );
    expect(getByLabelText('Test Input')).toBeDisabled();
    expect(getByLabelText('Test Input')).toHaveClass('bg-gray-50');
  });
});