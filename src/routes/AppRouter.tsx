import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Loader } from "../components";
import { ERROR_MESSAGES } from "../constants";
import { routes } from "./routes";

//Lazy imports
const ErrorPage = lazy(() => import("../routes/ErrorPage"));
const Admin = lazy(() => import("../modules/Admin/Admin"));
const CurrencyDetails = lazy(
  () => import("../modules/CurrencyDetails/CurrencyDetails")
);
const CurrencyExchange = lazy(
  () => import("../modules/CurrencyExchange/CurrencyExchange")
);

export const AppRouter = createBrowserRouter([
  {
    path: routes.base,
    element: <Layout />,
    errorElement: <ErrorPage errorMessage={ERROR_MESSAGES.default} />,
    children: [
      {
        path: routes.empty,
        errorElement: <ErrorPage errorMessage={ERROR_MESSAGES.default} />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <CurrencyExchange />
              </Suspense>
            ),
          },
          {
            path: routes.admin,
            element: (
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            ),
          },
          {
            path: routes.details,
            element: (
              <Suspense fallback={<Loader />}>
                <ErrorPage errorMessage={ERROR_MESSAGES.chooseCurrency} />
              </Suspense>
            ),
          },
          {
            path: "details/:currencyCode",
            element: (
              <Suspense fallback={<Loader />}>
                <CurrencyDetails />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
