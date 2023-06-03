import { FC, PropsWithChildren, useEffect } from "react";
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";
import styles from "./currencyExchange.module.css";
import { useGetCurrencyNamesQuery } from "../../redux";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  return (
    <Wrapper className={styles["wrapper"]}>
      <CurrencyDisplay />
      <CurrencyList />
    </Wrapper>
  );
};

export default CurrencyExchange;
