import { render } from '@testing-library/react';
import { Welcome } from './welcome';

// Mock the imported modules
jest.mock('@a1c/utils', () => ({
  utils: () => 'mocked utils',
}));

jest.mock('@a1c/data', () => ({
  dataAccess: () => 'mocked data access',
}));

describe('welcome', () => {
  it('should render successfully', async () => {
    // Since Welcome is now an async component, we need to await it
    const WelcomeComponent = await Welcome();
    
    // Render the result of the async component
    const { baseElement } = render(WelcomeComponent);
    expect(baseElement).toBeTruthy();
  });
});
