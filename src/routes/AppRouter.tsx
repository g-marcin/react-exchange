import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Admin } from "../modules/Admin";
import { Layout } from "../layout";
import { ComponentsDisplay } from "../components/ComponentsDisplay";
const CurrencyDetails = lazy(() => import("../modules/CurrencyDetails/CurrencyDetails"));
const CurrencyExchange = lazy(() => import("../modules/CurrencyExchange/CurrencyExchange"));

const Loading = () => {
  return <div>loading...</div>;
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: "",
        errorElement: <ErrorPage errorMessage="Page not found" />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <CurrencyExchange />{" "}
              </Suspense>
            ),
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "details",
            element: <ErrorPage errorMessage="Choose the currency from currency list" />,
          },
          {
            path: "details/:currencyCode",
            element: (
              <Suspense>
                <CurrencyDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/components",
        errorElement: <ErrorPage errorMessage="Page not found" />,
        element: <ComponentsDisplay />,
      },
    ],
  },
]);
