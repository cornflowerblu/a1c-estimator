import './global.css';
import { AuthProvider } from '@a1c/ui';
import { Navbar } from './components/navbar';

export const metadata = {
  title: 'A1C Estimator - Track and Manage Your Glucose Levels',
  description: 'A comprehensive tool for tracking glucose readings and estimating A1C levels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
