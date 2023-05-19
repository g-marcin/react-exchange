import { FC, PropsWithChildren } from "react";
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import styles from "./currencyExchange.module.css";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  return (
    <Wrapper className={styles["exchange__Wrapper"]}>
      <CurrencyDisplay />
      <CurrencyList />
    </Wrapper>
  );
};
