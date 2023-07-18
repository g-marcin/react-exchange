import { RouterProvider } from "react-router-dom";
import { ReactQueryProvider } from "./common/ReactQuery";
import { CurrencyContextProvider } from "./contexts";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AppRouter } from "./routes";

function App() {
  return (
    <>
      <ReactQueryProvider>
        <ThemeContextProvider>
          <CurrencyContextProvider>
            <RouterProvider router={AppRouter} />
          </CurrencyContextProvider>
        </ThemeContextProvider>
      </ReactQueryProvider>
    </>
  );
}

export default App;
