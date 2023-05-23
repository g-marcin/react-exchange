import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { CurrencyExchange } from "../modules";
import { Admin } from "../modules/Admin";
import App from "../App";
import { CurrencyHistory } from "../modules/CurrencyDisplay/CurrencyHistory";
import { CurrencyDetails } from "../modules/CurrencyDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            children: [
              { index: true, element: <CurrencyExchange /> },
              {
                path: "admin",
                element: <Admin />,
              },
            ],
          },
          {
            children: [
              {
                path: "details/:currencyCode",
                element: <CurrencyDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
