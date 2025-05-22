import { Welcome } from "@a1c/ui";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-8">
            <Welcome />
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* A1C Information Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:scale-[1.01]">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">A1C Estimator</h2>
            <p className="text-gray-600 mb-6">
              Track and estimate your A1C levels based on your glucose readings. 
              Our tool helps you understand your diabetes management better.
            </p>
            <div className="flex justify-end">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Features Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:scale-[1.01]">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Accurate A1C estimation based on glucose data</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Track your progress over time with visual charts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Set goals and receive personalized insights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Secure and private data storage</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-indigo-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already using our A1C Estimator to better manage their diabetes and improve their quality of life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/auth/register" className="bg-white text-indigo-700 hover:bg-indigo-50 font-medium py-3 px-8 rounded-lg transition-colors inline-block">
              Sign Up Free
            </a>
            <a href="/auth/login" className="bg-transparent border-2 border-white text-white hover:bg-indigo-600 font-medium py-3 px-8 rounded-lg transition-colors inline-block">
              Sign In
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2025 A1C Estimator. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
