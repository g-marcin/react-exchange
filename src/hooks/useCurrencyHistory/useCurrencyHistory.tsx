import { AxiosResponse } from "axios";
import { format, subDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { httpClient } from "../../common";
import { CurrencyContext } from "../../contexts";
import { PastCurrencyRates } from "../../types";

export const useCurrencyHistory = () => {
  const { presentCurrency, baseCurrency } = useContext(CurrencyContext);
  const [currencyHistory, setCurrencyHistory] = useState<PastCurrencyRates>({
    date: { code: 0 },
  });
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => {
    setInProgress(true);
    const date = new Date();
    const dateFrom = format(date, "yyyy-MM-dd");
    const dateTo = format(subDays(date, 8), "yyyy-MM-dd");
    httpClient
      .get(
        `/${dateTo}..${dateFrom}?from=${baseCurrency}&to=${
          presentCurrency ? presentCurrency.currencyCode : "USD"
        }`
      )
      .then((response: AxiosResponse) => {
        setCurrencyHistory(response.data.rates);
        setInProgress(false);
      });
  }, [baseCurrency, presentCurrency]);
  return { currencyHistory, inProgress };
};
