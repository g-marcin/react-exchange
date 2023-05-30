import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { PastCurrencyRates } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useCurrencyHistory = () => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const [currencyHistory, setCurrencyHistory] = useState<PastCurrencyRates>({ date: { code: 0 } });
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => {
    setInProgress(true);
    const date = new Date();
    const dateFrom = format(date, "yyyy-MM-dd");
    const dateTo = format(subDays(date, 12), "yyyy-MM-dd");
    httpClient.get(`/${dateTo}..${dateFrom}?from=${baseCurrency}&to=${presentCurrency}`).then((response: AxiosResponse) => {
      setCurrencyHistory(response.data.rates);
      setInProgress(false);
    });
  }, [baseCurrency, presentCurrency]);
  return { currencyHistory, inProgress };
};
