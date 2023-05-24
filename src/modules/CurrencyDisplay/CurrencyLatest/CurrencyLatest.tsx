import { FC, useContext } from "react";
import { Container, Loader } from "../../../components";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import styles from "./currencyLatest.module.css";
import { CurrencyContext } from "../../../contexts";

export const CurrencyLatest: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <Loader />;
  }
  const { presentCurrency, baseCurrency, latestCurrencyRates } = currencyContextObject;

  return (
    <>
      <Container className={styles["display__Latest"]}>
        {presentCurrency ? (
          <>
            <ImageWithFallback currencyCode={presentCurrency.currencyCode} className={styles["display__Flag"]} />
            <span>{`Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate:  ${
              latestCurrencyRates[presentCurrency.currencyCode]
            }`}</span>
            <ImageWithFallback currencyCode={baseCurrency} className={styles["display__Flag"]} />
          </>
        ) : (
          `Please choose currency to compare...`
        )}
      </Container>
    </>
  );
};
