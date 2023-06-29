import { FC, PropsWithChildren } from "react";
import { Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import styles from "./currencyExchange.module.css";

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
