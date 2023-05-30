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
const initialContextValues = {
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
};
export const CurrencyContext = createContext<CurrencyContextType>(initialContextValues);
export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedCurrencyNames, setFetchedCurrencyNames] = useState<FetchedCurrencyNamesType>({ currencyCode: "" });
  const [latestCurrencyRates, setLatestCurrencyRates] = useState<CurrencyRates>({
    currencyCode: 0,
  });
  const defaultCurrency: string | null = getDefaultCurrency();
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>(
    defaultCurrency
      ? {
          currencyCode: defaultCurrency,
          rate: latestCurrencyRates[defaultCurrency],
        }
      : null
  );
  const [baseCurrency, setBaseCurrency] = useState(presentCurrency?.currencyCode === "AUD" ? "USD" : "AUD");
  useEffect(() => {
    httpClient.get(`/latest?from=${baseCurrency}`).then((response: AxiosResponse) => {
      const fetchedCurrenciesDTO: FetchedCurrenciesDTO = response.data;
      setLatestCurrencyRates(fetchedDataMapper(fetchedCurrenciesDTO));
      if (presentCurrency) {
        setPresentCurrency({
          currencyCode: presentCurrency.currencyCode,
          rate: latestCurrencyRates[`${presentCurrency.currencyCode}`],
        });
      }
      function fetchedDataMapper(fetchedCurrencies: FetchedCurrenciesDTO) {
        return fetchedCurrencies.rates;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency]);
  useEffect(() => {
    httpClient.get(`/currencies`).then((response: AxiosResponse) => {
      setFetchedCurrencyNames(response.data);
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
