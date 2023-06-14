import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='px-8'>
      <h1 className='text-xl'>404 🤯</h1>
      <p>Cannot compute! 🤖</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
