import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FC, PropsWithChildren, createContext, useState } from "react";
import { getDefaultCurrency, httpClient } from "../../common";
import {
  CurrencyContextType,
  CurrencyRates,
  CurrencyType,
  FetchedCurrenciesDTO,
  FetchedCurrencyNamesType,
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
  const [fetchedCurrencyNames, setFetchedCurrencyNames] =
    useState<FetchedCurrencyNamesType>({ currencyCode: "" });
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
  const [baseCurrency, setBaseCurrency] = useState(
    presentCurrency?.currencyCode === "AUD" ? "USD" : "AUD"
  );

  const currencyLatestQuery = useQuery({
    queryKey: ["currencyLatest"],
    queryFn: () => {
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
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const currencyNamesQuery = useQuery({
    queryKey: ["currencyNames"],
    queryFn: () => {
      let data = [""];
      httpClient.get("/currencies").then((response: AxiosResponse) => {
        setFetchedCurrencyNames(response.data);
        data = response.data;
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
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
