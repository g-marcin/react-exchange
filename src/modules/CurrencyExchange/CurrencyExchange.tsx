import { FC, useState, useEffect, ReactNode, PropsWithChildren } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { Wrapper } from "../../components/Wrapper";
import { currencyData } from "../../data";
import { CurrencyDisplay } from "../CurrencyDisplay";
import { CurrencyList } from "../CurrencyList";
import { CurrencyType } from "../../types";
import styles from "./currencyExchange.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCaretDown,
  faBars,
  faDollarSign,
  faEuroSign,
  faZ,
} from "@fortawesome/free-solid-svg-icons";
library.add(faFacebook, faTwitter, faInstagram, faCaretDown, faBars, faDollarSign, faEuroSign, faZ);

interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export const CurrencyExchange: FC<CurrencyExchangeProps> = ({ className }) => {
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType | null>(null);
  const [fetchedCurrencies, setFetchedCurrencies] = useState([]);

  useEffect(() => {
    httpClient.get(`/latest?from=USD`).then((response: AxiosResponse) => {
      setFetchedCurrencies(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Wrapper className={`${styles.wrapper} ${className}`}>
      <CurrencyDisplay presentCurrency={presentCurrency} fetchedCurrencies={fetchedCurrencies} />
      <CurrencyList currencyData={currencyData} currencyButtonHandler={currencyButtonHandler} />
    </Wrapper>
  );

  function currencyButtonHandler(currency: CurrencyType) {
    setPresentCurrency(currency);
  }
};
