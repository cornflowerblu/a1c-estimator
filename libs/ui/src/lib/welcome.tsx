import { utils } from '@a1c/utils';

export default function Welcome() {
  const message = utils.toString()
  return (
    <div>
      <h1>Welcome to Ui!</h1>
      <h2>We are using {message}</h2>
    </div>
  );
}
