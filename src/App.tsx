import { AppRouter } from "./routes";
import { RouterProvider } from "react-router-dom";
import { CurrencyContextProvider } from "./contexts";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ReduxProvider } from "./store/ReduxProvider";

function App() {
  return (
    <>
      <ReduxProvider>
        <ThemeContextProvider>
          <CurrencyContextProvider>
            <RouterProvider router={AppRouter} />
          </CurrencyContextProvider>
        </ThemeContextProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
