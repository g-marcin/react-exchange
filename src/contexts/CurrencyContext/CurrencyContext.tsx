import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";
import { getDefaultCurrency, getTheme, httpClient } from "../../common";
import { AxiosResponse } from "axios";
import {
  FetchedCurrenciesDTO,
  CurrencyType,
  FetchedCurrencyNamesType,
  CurrencyContextType,
  CurrencyRates,
} from "../../types";
import { set } from "date-fns";

export const CurrencyContext = createContext<CurrencyContextType>({
  latestCurrencyRates: { code: 0 },
  fetchedCurrencyNames: { name: "name" },
  presentCurrency: { currencyCode: "", rate: 0 },
  baseCurrency: "",
  isDark: false,
  currencyButtonHandler: () => {
    return;
  },
  currencyBaseHandler: () => {
    return;
  },
  themeButtonHandler: () => {
    return;
  },
});

export const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedCurrencyNames, setCurrencyNames] = useState<FetchedCurrencyNamesType>({ currencyCode: "" });
  const [latestCurrencyRates, setLatestCurrencyRates] = useState<CurrencyRates>({
    currencyCode: 0,
  });
  const defaultCurrency: string = getDefaultCurrency() || "USD";
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType>({
    currencyCode: defaultCurrency,
    rate: latestCurrencyRates[defaultCurrency],
  });
  const [baseCurrency, setBaseCurrency] = useState(presentCurrency?.currencyCode === "AUD" ? "USD" : "AUD");
  const [isDark, setIsDark] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency]);
  useEffect(() => {
    httpClient.get(`/currencies`).then((response: AxiosResponse) => {
      setCurrencyNames(response.data);
    });
  }, []);
  useEffect(() => {
    const currentTheme = getTheme();
    currentTheme === "dark" ? setIsDark(true) : setIsDark(false);
    console.log("use effect gives", isDark);
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
  function themeButtonHandler() {
    setIsDark(!isDark);
    const body = document.getElementsByTagName("body")[0];
    body.className = isDark ? "dark" : "light";
  }
  return (
    <CurrencyContext.Provider
      value={{
        latestCurrencyRates: latestCurrencyRates,
        fetchedCurrencyNames: fetchedCurrencyNames,
        presentCurrency: presentCurrency,
        baseCurrency: baseCurrency,
        isDark: isDark,
        currencyButtonHandler: currencyButtonHandler,
        currencyBaseHandler: currencyBaseHandler,
        themeButtonHandler: themeButtonHandler,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
