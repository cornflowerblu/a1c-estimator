import { AuthLayout, LoginForm } from '@a1c/ui';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Or create a new account if you don't have one"
    >
      <LoginForm />
    </AuthLayout>
  );
}