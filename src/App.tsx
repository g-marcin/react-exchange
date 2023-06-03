import { AppRouter } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ReduxProvider } from "./redux/ReduxProvider";

function App() {
  return (
    <>
      <ReduxProvider>
        <ThemeContextProvider>
          <RouterProvider router={AppRouter} />
        </ThemeContextProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
