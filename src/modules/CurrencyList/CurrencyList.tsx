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
    <Wrapper className={styles["List__wrapper"]}>
      {fetchedCurrencies &&
        Object.entries(fetchedCurrencies?.rates).map(([currencyCode, currencyRate]) => {
          return (
            <Currency
              currencyCode={currencyCode}
              currencyRate={currencyRate}
              currencyNames={currencyNames}
              currencyButtonHandler={currencyButtonHandler}
            />
          );
        })}
    </Wrapper>
  );
};
