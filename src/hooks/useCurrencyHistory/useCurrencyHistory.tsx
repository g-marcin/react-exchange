import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { CurrencyType, PastCurrencyRates } from "../../types";

export const useCurrencyHistory = (baseCurrency: string, presentCurrency: CurrencyType) => {
  const [currencyHistory, setCurrencyHistory] = useState<PastCurrencyRates>();
  useEffect(() => {
    const date = new Date();
    const dateFrom = format(date, "yyyy-MM-dd");
    const dateTo = format(subDays(date, 12), "yyyy-MM-dd");
    httpClient
      .get(`/${dateTo}..${dateFrom}?from=${baseCurrency}&to=${presentCurrency?.currencyCode}`)
      .then((response: AxiosResponse) => {
        setCurrencyHistory(response.data.rates);
      });
  }, [baseCurrency, presentCurrency]);
  return currencyHistory;
};
