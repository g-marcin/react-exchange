import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { format, subDays } from "date-fns";
import {
  FetchedCurrenciesDTO,
  FetchedCurrenciesHistoryType,
  FetchedCurrenciesHistoryDTO,
  CurrencyType,
  FetchedCurrencyNamesType,
  CurrencyContextType,
  CurrencyRates,
  PastCurrencyRates,
} from "../../types";

export const CurrencyContext = createContext<CurrencyContextType>(null);

export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedCurrencyNames, setCurrencyNames] = useState<FetchedCurrencyNamesType>({ currencyCode: "" });
  const [latestCurrencyRates, setLatestCurrencyRates] = useState<CurrencyRates>({
    currencyCode: 0,
  });

  const [pastCurrencyRates, setPastCurrencyRates] = useState<PastCurrencyRates>({ "": { currencyCode: 0 } });
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>(null);
  const [baseCurrency, setBaseCurrency] = useState("AUD");

  useEffect(() => {
    httpClient.get(`/latest?from=${baseCurrency}`).then((response: AxiosResponse) => {
      const fetchedCurrenciesDTO: FetchedCurrenciesDTO = response.data;
      setLatestCurrencyRates(fetchedDataMapper(fetchedCurrenciesDTO));
      updatePresentCurrency();
      function fetchedDataMapper(fetchedCurrencies: FetchedCurrenciesDTO) {
        return fetchedCurrencies.rates;
      }
      function updatePresentCurrency() {
        if (presentCurrency) {
          setPresentCurrency({
            currencyCode: presentCurrency.currencyCode,
            rate: latestCurrencyRates[`${presentCurrency.currencyCode}`],
          });
        }
      }
    });
  }, [baseCurrency]);
  useEffect(() => {
    const date = new Date();
    const currentDate = format(date, "yyyy-MM-dd");
    const weekAgoDate = format(subDays(date, 12), "yyyy-MM-dd");
    httpClient.get(`/${weekAgoDate}..${currentDate}?from=${baseCurrency}`).then((response: AxiosResponse) => {
      setPastCurrencyRates(fetchedDataMapper(response.data));
      function fetchedDataMapper(fetchedData: FetchedCurrenciesHistoryDTO) {
        return fetchedData.rates;
      }
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
        latestCurrencyRates: latestCurrencyRates,
        pastCurrenciesRates: pastCurrencyRates,
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
    if (!latestCurrencyRates) {
      return;
    }
    setPresentCurrency({
      currencyCode: currencyCode,
      rate: latestCurrencyRates[`${currencyCode}`],
    });
  }
  function currencyBaseHandler(currencyCode: string): void {
    if (!latestCurrencyRates) {
      return;
    }
    if (!presentCurrency) {
      return;
    }
    setBaseCurrency(currencyCode);
  }
};
