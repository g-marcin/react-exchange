import { FC, PropsWithChildren } from "react";
import { Card, Wrapper } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import styles from "./currencyExchange.module.css";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  return (
    <Card title={"Currency Exchange"}>
      <CurrencyDisplay />
      <CurrencyList />
    </Card>
  );
};
