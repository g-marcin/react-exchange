import { AppRouter } from "./routes";
import { RouterProvider } from "react-router-dom";
import { CurrencyContextProvider } from "./contexts";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <CurrencyContextProvider>
          <RouterProvider router={AppRouter} />
        </CurrencyContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
