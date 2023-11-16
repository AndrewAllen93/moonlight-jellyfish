import { useRouteError } from 'react-router-dom';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>*Uses Jedi Mind Powers*</h1>
      <p>These are not the droids you're looking for!!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}