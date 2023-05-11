import { FC, useState, useEffect } from "react";
import { format, subDays } from "date-fns";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
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
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import {
  IFetchedCurrencies,
  CurrencyExchangeProps,
  CurrencyType,
  IFetchedCurrenciesHistory,
} from "../../types";
import styles from "./currencyExchange.module.css";

export const CurrencyExchange: FC<CurrencyExchangeProps> = ({ className }) => {
  const [fetchedCurrencies, setFetchedCurrencies] = useState<IFetchedCurrencies>({
    amount: 0,
    base: "",
    date: "",
    rates: { code: 0 },
  });
  const [fetchedCurrenciesHistory, setFetchedCurrenciesHistory] =
    useState<IFetchedCurrenciesHistory>({
      amount: 0,
      base: "",
      date: "",
      rates: { date: { code: 0 } },
    });
  const [currencyNames, setCurrencyNames] = useState<{ [k: string]: string }>({ currencyCode: "" });
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>(null);
  const [baseCurrency, setBaseCurrency] = useState("AUD");

  useEffect(() => {
    httpClient.get(`/latest?from=${baseCurrency}`).then((response: AxiosResponse) => {
      setFetchedCurrencies(response.data);
    });
  }, [baseCurrency]);

  useEffect(() => {
    const date = new Date();
    const currentDate = format(date, "yyyy-MM-dd");
    const weekAgoDate = format(subDays(date, 12), "yyyy-MM-dd");
    httpClient
      .get(`/${weekAgoDate}..${currentDate}?from=${baseCurrency}`)
      .then((response: AxiosResponse) => {
        setFetchedCurrenciesHistory(response.data);
      });
  }, [baseCurrency]);

  useEffect(() => {
    httpClient.get(`/currencies`).then((response: AxiosResponse) => {
      setCurrencyNames(response.data);
    });
  }, []);

  return (
    <Wrapper className={styles["exchange__Wrapper"]}>
      <CurrencyDisplay
        presentCurrency={presentCurrency}
        baseCurrency={baseCurrency}
        fetchedCurrenciesHistory={fetchedCurrenciesHistory}
        currencyBaseHandler={currencyBaseHandler}
        currencyNames={currencyNames}
      />

      <CurrencyList
        fetchedCurrencies={fetchedCurrencies}
        currencyButtonHandler={currencyButtonHandler}
        currencyNames={currencyNames}
      />
    </Wrapper>
  );

  function currencyButtonHandler(currencyCode: string): void {
    if (!fetchedCurrencies) {
      return;
    }
    setPresentCurrency({
      currencyCode: currencyCode,
      rate: fetchedCurrencies.rates[`${currencyCode}`],
    });
  }
  function currencyBaseHandler(currencyCode: string, presentCurrency: CurrencyType): void {
    if (!fetchedCurrencies) {
      return;
    }
    if (!presentCurrency) {
      return;
    }
    setBaseCurrency(currencyCode);
    setPresentCurrency({
      currencyCode: presentCurrency?.currencyCode,
      rate: fetchedCurrencies.rates[presentCurrency.currencyCode],
    });
  }
};
