import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { CurrencyExchange } from "../modules";
import { Admin } from "../modules/Admin";
import App from "../App";
import { CurrencyDetails } from "../modules/CurrencyDetails";

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
          { index: true, element: <CurrencyExchange /> },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "details/:currencyCode",
            element: <CurrencyDetails />,
          },
        ],
      },
    ],
  },
]);
