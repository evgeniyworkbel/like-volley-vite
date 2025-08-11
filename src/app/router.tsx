import { createBrowserRouter } from "react-router";
import { Root } from "@/pages/Root";
import { ErrorPage } from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  { path: "/like-volley/", Component: Root, errorElement: <ErrorPage /> },
]);
