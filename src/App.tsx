import { CurrencyContextProvider } from "./contexts";
import { Layout } from "./layout";
import "./common/FontAwesomeLibrary";

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <Layout />
      </CurrencyContextProvider>
    </>
  );
}

export default App;
