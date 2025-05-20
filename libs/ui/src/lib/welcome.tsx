import { utils } from '@a1c/utils';

export function Welcome() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium text-gray-800 mb-4">Hello there,</h1>
      <p className="text-2xl text-gray-700">
        Here we can use a package imported from UI!
        <br />
        We are using {utils()}
      </p>
    </div>
  );
}
