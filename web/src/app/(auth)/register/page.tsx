import { AuthLayout, RegisterForm } from '@a1c/ui';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create a new account"
      subtitle="Join thousands of users tracking their A1C levels"
    >
      <RegisterForm />
    </AuthLayout>
  );
}