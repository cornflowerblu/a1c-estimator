import { AuthLayout, MagicLinkForm } from '@a1c/ui';

export default function MagicLinkPage() {
  return (
    <AuthLayout
      title="Login with Magic Link"
      subtitle="No password required - we'll email you a secure link"
    >
      <MagicLinkForm />
    </AuthLayout>
  );
}