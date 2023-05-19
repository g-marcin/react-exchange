import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";
import { getDefaultCurrency, httpClient } from "../../common";
import { AxiosResponse } from "axios";
import {
  FetchedCurrenciesDTO,
  CurrencyType,
  FetchedCurrencyNamesType,
  CurrencyContextType,
  CurrencyRates,
} from "../../types";

export const CurrencyContext = createContext<CurrencyContextType>({
  latestCurrencyRates: { code: 0 },
  fetchedCurrencyNames: { name: "name" },
  presentCurrency: { currencyCode: "", rate: 0 },
  baseCurrency: "",
  currencyButtonHandler: () => {
    return;
  },
  currencyBaseHandler: () => {
    return;
  },
});

export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedCurrencyNames, setCurrencyNames] = useState<FetchedCurrencyNamesType>({ currencyCode: "" });
  const [latestCurrencyRates, setLatestCurrencyRates] = useState<CurrencyRates>({
    currencyCode: 0,
  });
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>({ currencyCode: "BGN", rate: 0 });
  const defaultCurrency: string = getDefaultCurrency();
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);

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
    httpClient.get(`/currencies`).then((response: AxiosResponse) => {
      setCurrencyNames(response.data);
    });
  }, []);

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

  return (
    <CurrencyContext.Provider
      value={{
        latestCurrencyRates: latestCurrencyRates,
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
};
