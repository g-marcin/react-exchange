import { FC, useState, useEffect } from "react";
import { format, subDays } from "date-fns";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import { FetchedCurrenciesProps, CurrencyExchangeProps, CurrencyType, FetchedCurrenciesHistoryProps } from "../../types";
import styles from "./currencyExchange.module.css";

export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrenciesProps>({
    amount: 0,
    base: "",
    date: "",
    rates: { code: 0 },
  });
  const [fetchedCurrenciesHistory, setFetchedCurrenciesHistory] = useState<FetchedCurrenciesHistoryProps>({
    amount: 0,
    base: "",
    date: "",
    rates: { date: { code: 0 } },
  });
  const [fetchedCurrencyNames, setCurrencyNames] = useState<{ [k: string]: string }>({ currencyCode: "" });
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
    httpClient.get(`/${weekAgoDate}..${currentDate}?from=${baseCurrency}`).then((response: AxiosResponse) => {
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
        currencyNames={fetchedCurrencyNames}
        fetchedCurrenciesHistory={fetchedCurrenciesHistory}
        presentCurrency={presentCurrency}
        baseCurrency={baseCurrency}
        currencyBaseHandler={currencyBaseHandler}
      />
      <CurrencyList
        currencyNames={fetchedCurrencyNames}
        fetchedCurrencies={fetchedCurrencies}
        currencyButtonHandler={currencyButtonHandler}
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
