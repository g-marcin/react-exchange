import { FC } from "react";
import { Wrapper } from "../../components";
import { Currency } from "./Currency";
import { CurrencyListProps } from "../../types";
import styles from "./currencyList.module.css";

export const CurrencyList: FC<CurrencyListProps> = ({
  currencyButtonHandler,
  fetchedCurrencies,
  currencyNames,
}) => {
  return (
    <Wrapper className={styles["list__Wrapper"]}>
      {fetchedCurrencies &&
        Object.entries(fetchedCurrencies.rates).map(([currencyCode, currencyRate]) => {
          return (
            <Currency
              currencyCode={currencyCode}
              currencyRate={currencyRate}
              currencyNames={currencyNames}
              currencyButtonHandler={currencyButtonHandler}
              key={currencyCode}
            />
          );
        })}
    </Wrapper>
  );
};
