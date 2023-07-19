import { FC, useContext } from "react";
import { Loader, Wrapper } from "../../components";
import { CurrencyContext } from "../../contexts";
import { Currency } from "./Currency";
import styles from "./currencyList.module.css";

export const CurrencyList: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <Loader />;
  }
  const latestCurrencyRates = currencyContextObject.currencyLatest;
  return (
    <Wrapper className={styles["list__Wrapper"]}>
      {Object.entries(latestCurrencyRates).map(([currencyCode, currencyRate]) => {
        return (
          <Currency
            currencyCode={currencyCode}
            currencyRate={currencyRate}
            key={currencyCode}
          />
        );
      })}
    </Wrapper>
  );
};
