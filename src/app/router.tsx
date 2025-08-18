import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { ErrorPage } from "@/pages/ErrorPage";

export const router = createBrowserRouter(
  [{ path: "/", Component: HomePage, errorElement: <ErrorPage /> }],
  { basename: "/like-volley/" },
);
