import { Wrapper } from "./components/Wrapper";
import { Header } from "./modules";
import { CurrencyExchange } from "./modules/CurrencyExchange";
import { Footer } from "./modules/Footer";

function App() {
  return (
    <Wrapper className="main__Wrapper">
      <Header />
      <CurrencyExchange />
      <Footer />
    </Wrapper>
  );
}

export default App;
