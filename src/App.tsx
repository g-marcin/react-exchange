import { Wrapper } from "./components/Wrapper";
import { Header } from "./modules";
import { CurrencyExchange } from "./modules/CurrencyExchange";
import { Footer } from "./modules/Footer";
import { ReactDOM } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook, faTwitter, faInstagram, faCaretDown, faBars);

function App() {
  return (
    <>
      <Header />
      <Wrapper className="main__Wrapper">
        <CurrencyExchange />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
