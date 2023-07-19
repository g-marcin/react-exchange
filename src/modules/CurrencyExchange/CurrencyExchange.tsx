import { FC, PropsWithChildren, useEffect } from "react";

import { CurrencyDisplay, CurrencyList } from "..";
import { getDefaultCurrency, setDefaultCurrency } from "../../common";
import { Wrapper } from "../../components";
import styles from "./currencyExchange.module.css";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}
const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  useEffect(() => {
    async () => {
      const defaultCurrency = await getDefaultCurrency();
      if (!defaultCurrency) {
        setDefaultCurrency("EUR");
      }
    };
  }, []);
  return (
    <Wrapper className={styles["wrapper"]}>
      <CurrencyDisplay />
      <CurrencyList />
    </Wrapper>
  );
};

export default CurrencyExchange;
