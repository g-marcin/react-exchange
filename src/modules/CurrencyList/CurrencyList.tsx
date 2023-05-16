import { FC, useContext } from "react";
import { Wrapper } from "../../components";
import { Currency } from "./Currency";
import styles from "./currencyList.module.css";
import { CurrencyContext } from "../../contexts";

export const CurrencyList: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <p>No context!</p>;
  }
  const latestCurrencyRates = currencyContextObject.latestCurrencyRates;
  return (
    <Wrapper className={styles["list__Wrapper"]}>
      {Object.entries(latestCurrencyRates).map(([currencyCode, currencyRate]) => {
        return <Currency currencyCode={currencyCode} currencyRate={currencyRate} key={currencyCode} />;
      })}
    </Wrapper>
  );
};
