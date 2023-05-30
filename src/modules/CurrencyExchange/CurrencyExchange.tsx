import { FC, PropsWithChildren, useEffect } from "react";
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";
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
