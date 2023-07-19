import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";
import { httpClient } from "../../common";
import {
  CurrencyContextType,
  CurrencyType,
  FetchedCurrenciesDTO,
  FetchedCurrencyNamesType,
} from "../../types";
const initialContextValues = {
  currencyLatest: { code: 0 },
  fetchedCurrencyNames: { name: "name" },
  presentCurrency: { currencyCode: "", rate: 0 },
  baseCurrency: "",
  currencyHistory: { "": { "": 0 } },
  currencyButtonHandler: () => {
    return;
  },
  currencyBaseHandler: () => {
    return;
  },
};
export const CurrencyContext = createContext<CurrencyContextType>(initialContextValues);
export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>({
    currencyCode: "USD",
    rate: 0,
  });
  const [baseCurrency, setBaseCurrency] = useState(
    presentCurrency?.currencyCode === "AUD" ? "USD" : "AUD"
  );
  const {
    data: currencyLatest,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currencyLatest", presentCurrency, baseCurrency],
    queryFn: () => {
      const rates = httpClient
        .get(`/latest?from=${baseCurrency}`)
        .then((response: AxiosResponse) => {
          const fetchedCurrenciesDTO: FetchedCurrenciesDTO = response.data;

          function fetchedDataMapper(fetchedCurrencies: FetchedCurrenciesDTO) {
            return fetchedCurrencies.rates;
          }
          return fetchedDataMapper(fetchedCurrenciesDTO);
        });
      return rates;
    },
  });

  const [fetchedCurrencyNames, setFetchedCurrencyNames] =
    useState<FetchedCurrencyNamesType>({ currencyCode: "" });

  useEffect(() => {
    console.log(presentCurrency, baseCurrency);
  }, [presentCurrency, baseCurrency]);
  useQuery({
    queryKey: ["currencyNames"],
    queryFn: () => {
      httpClient.get("/currencies").then((response: AxiosResponse) => {
        setFetchedCurrencyNames(response.data);
      });
      return null;
    },
  });

  const {
    data: currencyHistory,
    isLoading: isHistoryLoading,
    isError: isHistoryError,
  } = useQuery({
    queryKey: ["currencyHistory", presentCurrency, baseCurrency],
    queryFn: () => {
      const date = new Date();
      const dateFrom = format(date, "yyyy-MM-dd");
      const dateTo = format(subDays(date, 8), "yyyy-MM-dd");
      const history = httpClient
        .get(
          `/${dateTo}..${dateFrom}?from=${baseCurrency}&to=${
            presentCurrency ? presentCurrency.currencyCode : "USD"
          }`
        )
        .then((response: AxiosResponse) => {
          console.log(response.data.rates);
          return response.data.rates;
        });
      return history;
    },
  });

  const currencyButtonHandler = (currencyCode: string): void => {
    if (!currencyLatest) {
      return;
    }
    setPresentCurrency({
      currencyCode: currencyCode,
      rate: currencyLatest[`${currencyCode}`],
    });
  };
  const currencyBaseHandler = (currencyCode: string): void => {
    setBaseCurrency(currencyCode);
  };

  if (!currencyLatest) {
    return <div></div>;
  }
  if (!currencyHistory) {
    return <div></div>;
  }

  return (
    <CurrencyContext.Provider
      value={{
        currencyLatest: currencyLatest,
        fetchedCurrencyNames: fetchedCurrencyNames,
        presentCurrency: presentCurrency,
        baseCurrency: baseCurrency,
        currencyHistory: currencyHistory,
        currencyButtonHandler: currencyButtonHandler,
        currencyBaseHandler: currencyBaseHandler,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
