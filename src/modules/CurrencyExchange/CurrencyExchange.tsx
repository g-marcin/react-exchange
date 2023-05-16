import { FC } from "react";

import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import { CurrencyExchangeProps } from "../../types";
import styles from "./currencyExchange.module.css";

export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  return (
    <Wrapper className={styles["exchange__Wrapper"]}>
      <CurrencyDisplay />
      <CurrencyList />
    </Wrapper>
  );
};
