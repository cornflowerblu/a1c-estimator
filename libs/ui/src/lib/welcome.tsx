import { utils } from '@a1c/utils';
import { dataAccess } from '@a1c/data';
import { RandomData } from '@a1c/types'

export async function Welcome() {
  // Server-side data fetching
  let apiMessage = '';
  let error = '';
  
  try {
    // In a real app, you might want to use a more robust way to fetch data
    // This is a simple example that directly uses the same function as the API
    const res: RandomData = await dataAccess();
    const message = res.data;
    
    apiMessage = `Hello, from ${message}!`;
  } catch (err) {
    error = 'Failed to fetch data';
    console.error('Error getting data:', err);
  }

  return (
    <div className="p-6 relative">
      <h1 className="text-4xl font-medium text-gray-800 mb-4">Hello there,</h1>
      <p className="text-2xl text-gray-700 mb-6">
        Here we can use a package imported from UI!
        <br />
        We are using {utils()}
      </p>
      
      <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100 shadow-sm">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-xl text-indigo-700 font-medium">
            API says: <span className="italic">{apiMessage}</span>
          </p>
        )}
      </div>
    </div>
  );
}
