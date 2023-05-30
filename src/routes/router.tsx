import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Admin } from "../modules/Admin";
import App from "../App";
const CurrencyDetails = lazy(() => import("../modules/CurrencyDetails/CurrencyDetails"));
const CurrencyExchange = lazy(() => import("../modules/CurrencyExchange/CurrencyExchange"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <Suspense>
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
            element: <div>Choose the currency from currency list</div>,
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
    ],
  },
]);
