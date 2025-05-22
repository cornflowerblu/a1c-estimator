import { render, screen, act } from '@testing-library/react';
import { SessionProvider } from "./session-provider";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

// Mock next-auth/react
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

// Helper component to test the session state
const TestComponent = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <div data-testid="status">{status}</div>
      {session?.user && (
        <div data-testid="user">
          {session.user.name} ({session.user.email})
        </div>
      )}
    </div>
  );
};

describe('SessionProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render children when session is loading', async () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "loading"
    });

    await act(async () => {
      render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>
      );
    });

    expect(screen.getByTestId('status')).toHaveTextContent('loading');
    expect(screen.queryByTestId('user')).not.toBeInTheDocument();
  });

  it('should render children when session is authenticated', async () => {
    const mockSession = {
      user: {
        name: "Test User",
        email: "test@example.com"
      }
    };

    (useSession as jest.Mock).mockReturnValue({
      data: mockSession,
      status: "authenticated"
    });

    await act(async () => {
      render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>
      );
    });

    expect(screen.getByTestId('status')).toHaveTextContent('authenticated');
    expect(screen.getByTestId('user')).toHaveTextContent('Test User (test@example.com)');
  });

  it('should render children when session is unauthenticated', async () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated"
    });

    await act(async () => {
      render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>
      );
    });

    expect(screen.getByTestId('status')).toHaveTextContent('unauthenticated');
    expect(screen.queryByTestId('user')).not.toBeInTheDocument();
  });
});