import React from 'react';
import { render, act } from '@testing-library/react';
import Page from '../src/app/page';

// Mock the Welcome component since it's async
jest.mock('@a1c/ui', () => ({
  Welcome: () => <div data-testid="welcome-mock">Welcome Component</div>
}));

describe('Page', () => {
  it('should render successfully', async () => {
    const result = await act(async () => {
      return render(<Page />);
    });
    expect(result.baseElement).toBeTruthy();
  });
});