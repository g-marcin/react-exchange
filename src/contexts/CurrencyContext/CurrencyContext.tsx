import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import {
  FetchedCurrenciesType,
  FetchedCurrenciesHistoryType,
  CurrencyType,
  FetchedCurrencyNamesType,
  CurrencyContextType,
} from "../../types";
import { format, subDays } from "date-fns";

export const CurrencyContext = createContext<CurrencyContextType>(null);

export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedCurrencyNames, setCurrencyNames] = useState<FetchedCurrencyNamesType>({ currencyCode: "" });
  const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrenciesType>({
    amount: 0,
    base: "",
    date: "",
    rates: { currencyCode: 0 },
  });
  const [fetchedCurrenciesHistory, setFetchedCurrenciesHistory] = useState<FetchedCurrenciesHistoryType>({
    amount: 0,
    base: "",
    date: "",
    rates: { date: { currencyCode: 0 } },
  });
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>(null);
  const [baseCurrency, setBaseCurrency] = useState("AUD");

  useEffect(() => {
    httpClient.get(`/latest?from=${baseCurrency}`).then((response: AxiosResponse) => {
      const newFetchedCurrencies = response.data;
      setFetchedCurrencies(newFetchedCurrencies);
      if (presentCurrency) {
        setPresentCurrency({
          currencyCode: presentCurrency.currencyCode,
          rate: newFetchedCurrencies.rates[`${presentCurrency.currencyCode}`],
        });
      }
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
    <CurrencyContext.Provider
      value={{
        fetchedCurrencies: fetchedCurrencies,
        fetchedCurrenciesHistory: fetchedCurrenciesHistory,
        fetchedCurrencyNames: fetchedCurrencyNames,
        presentCurrency: presentCurrency,
        baseCurrency: baseCurrency,
        currencyButtonHandler: currencyButtonHandler,
        currencyBaseHandler: currencyBaseHandler,
      }}
    >
      {children}
    </CurrencyContext.Provider>
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
  function currencyBaseHandler(currencyCode: string): void {
    if (!fetchedCurrencies) {
      return;
    }
    if (!presentCurrency) {
      return;
    }
    setBaseCurrency(currencyCode);
  }
};
