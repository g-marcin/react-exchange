import { FC } from "react";
import { CurrencyLatestProps } from "../../../types";
import styles from "./currencyLatest.module.css";
import { Container } from "../../../components";

export const CurrencyLatest: FC<CurrencyLatestProps> = ({ presentCurrency, baseCurrency }) => {
  return (
    <Container className={styles["display__Latest"]}>
      {presentCurrency
        ? `Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate: ${presentCurrency?.rate}`
        : `Please choose currency to compare...`}
    </Container>
  );
};
