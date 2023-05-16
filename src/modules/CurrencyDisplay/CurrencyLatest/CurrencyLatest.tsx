import { FC } from "react";
import { Container } from "../../../components";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { CurrencyLatestProps } from "../../../types";
import styles from "./currencyLatest.module.css";

export const CurrencyLatest: FC<CurrencyLatestProps> = ({ presentCurrency, baseCurrency }) => {
  return (
    <>
      <Container className={styles["display__Latest"]}>
        {presentCurrency ? (
          <>
            <ImageWithFallback currencyCode={presentCurrency.currencyCode} className={styles["display__Flag"]} />
            <span>{`Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate:${presentCurrency.rate}`}</span>
            <ImageWithFallback currencyCode={baseCurrency} className={styles["display__Flag"]} />
          </>
        ) : (
          `Please choose currency to compare...`
        )}
      </Container>
    </>
  );
};
