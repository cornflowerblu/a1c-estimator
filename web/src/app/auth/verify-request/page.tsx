export default function VerifyRequest() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-blue-100 p-3">
            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">Check your email</h2>
        </div>
        
        <div className="mt-4">
          <p className="text-center text-gray-600">
            A sign in link has been sent to your email address.
          </p>
          <p className="mt-2 text-center text-gray-600">
            Please check your email (including spam folder) for a link to sign in.
          </p>
        </div>
        
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">
            Didn't receive an email? Check your spam folder or try signing in again.
          </p>
        </div>
      </div>
    </div>
  );
}
