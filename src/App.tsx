import { AppRouter } from "./routes";
import { RouterProvider } from "react-router-dom";
import { CurrencyContextProvider } from "./contexts";

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <RouterProvider router={AppRouter} />
      </CurrencyContextProvider>
    </>
  );
}

export default App;
