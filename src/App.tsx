import { CurrencyContextProvider } from "./contexts";
import { Header, Footer } from "./layout";
import { CurrencyExchange } from "./modules";
import "./common/FontAwesomeLibrary";

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <Header />
        <CurrencyExchange />
        <Footer />
      </CurrencyContextProvider>
    </>
  );
}

export default App;
