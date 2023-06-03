import { FC } from "react";

import { Currency } from "./Currency";
import { Wrapper, Loader } from "../../components";
import styles from "./currencyList.module.css";
import { useGetLatestRatesQuery } from "../../redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export const CurrencyList: FC = () => {
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const data = useGetLatestRatesQuery(baseCurrency).data;
  if (!data) {
    return <Loader />;
  }
  const latestCurrencyRates = data.rates;
  return (
    <Wrapper className={styles["list__Wrapper"]}>
      {Object.entries(latestCurrencyRates).map(([currencyCode, currencyRate]) => {
        return <Currency currencyCode={currencyCode} currencyRate={currencyRate} key={currencyCode} />;
      })}
    </Wrapper>
  );
};
