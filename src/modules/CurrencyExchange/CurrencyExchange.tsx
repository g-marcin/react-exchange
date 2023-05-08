import { FC, useState, useEffect, ReactNode, PropsWithChildren } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { Wrapper } from "../../components/Wrapper";
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
import { FetchedCurrenciesType } from "../../types";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
import { CurrencyExchangeProps } from "../../types";

export const CurrencyExchange: FC<CurrencyExchangeProps> = ({ className }) => {
  const [currencyNames, setCurrencyNames] = useState<{ [k: string]: string }>({ null: "null" });
  const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrenciesType>(null);
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType | null>(null);
  const [fetchedCurrenciesHistory, setFetchedCurrenciesHistory] =
    useState<FetchedCurrenciesType>(null);

  useEffect(() => {
    httpClient.get(`/latest?from=USD`).then((response: AxiosResponse) => {
      setFetchedCurrencies(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const date = new Date();
    const currentDate = format(date, "yyyy-MM-dd");
    const weekAgoDate = format(subDays(date, 7), "yyyy-MM-dd");
    httpClient.get(`/${weekAgoDate}..${currentDate}?from=USD`).then((response: AxiosResponse) => {
      console.log(response.data);
      setFetchedCurrenciesHistory(response.data);
    });
  }, []);

  useEffect(() => {
    httpClient.get(`/currencies`).then((response: AxiosResponse) => {
      console.log(response.data);
      setCurrencyNames(response.data);
    });
  }, []);

  return (
    <Wrapper className={`${styles.wrapper} ${className}`}>
      <CurrencyDisplay
        presentCurrency={presentCurrency}
        fetchedCurrenciesHistory={fetchedCurrenciesHistory}
      />
      <CurrencyList
        fetchedCurrencies={fetchedCurrencies}
        currencyButtonHandler={currencyButtonHandler}
        currencyNames={currencyNames}
      />
    </Wrapper>
  );

  function currencyButtonHandler(currencyCode: string): void {
    setPresentCurrency({
      currencyCode: currencyCode,
      rate: fetchedCurrencies?.rates[`${currencyCode}`],
    });
  }
};
