import { useRouteError } from "react-router";

export const Page = () => {
  const error = useRouteError();

  console.error(error);

  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message && error.message}</i>
        </p>
      </div>
    );
  }
};
