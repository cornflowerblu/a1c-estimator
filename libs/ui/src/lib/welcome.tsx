import { utils } from '@a1c/utils';

export function Welcome() {

  return (
    <div>
      <p>a package imported from UI!</p>
      <p>We are using {utils()}</p>
    </div>
  );
}
