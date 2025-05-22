import { AuthLayout, PasskeySetup } from '@a1c/ui';

export default function PasskeySetupPage() {
  return (
    <AuthLayout
      title="Set Up Passkey"
      subtitle="Enhance your account security with a passkey"
    >
      <PasskeySetup />
    </AuthLayout>
  );
}