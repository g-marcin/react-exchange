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
            <div>
              <ImageWithFallback currencyCode={presentCurrency.currencyCode} className={styles["display__Flag"]} />
            </div>
            <span className={styles["latest-big"]}>{`Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate:  ${
              latestCurrencyRates[presentCurrency.currencyCode]
            }`}</span>
            <span className={styles["latest-small"]}>{`${presentCurrency?.currencyCode} to ${baseCurrency} ${
              latestCurrencyRates[presentCurrency.currencyCode]
            }`}</span>
            <div>
              <ImageWithFallback currencyCode={baseCurrency} className={styles["display__Flag"]} />
            </div>
          </>
        ) : (
          `Please choose currency to compare...`
        )}
      </Container>
    </>
  );
};
