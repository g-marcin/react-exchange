import { FC, useContext } from "react";
import { Wrapper, Loader } from "../../components";
import { Currency } from "./Currency";
import styles from "./currencyList.module.css";
import { CurrencyContext } from "../../contexts";

export const CurrencyList: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <Loader />;
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
