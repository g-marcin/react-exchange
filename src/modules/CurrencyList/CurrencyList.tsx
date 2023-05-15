import { FC, useContext } from "react";
import { Wrapper } from "../../components";
import { Currency } from "./Currency";
import styles from "./currencyList.module.css";
import { CurrencyContext } from "../../contexts";

export const CurrencyList: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  const fetchedCurrencies = currencyContextObject?.fetchedCurrencies;
  return (
    <Wrapper className={styles["list__Wrapper"]}>
      {fetchedCurrencies &&
        Object.entries(fetchedCurrencies.rates).map(([currencyCode, currencyRate]) => {
          return <Currency currencyCode={currencyCode} currencyRate={currencyRate} key={currencyCode} />;
        })}
    </Wrapper>
  );
};
