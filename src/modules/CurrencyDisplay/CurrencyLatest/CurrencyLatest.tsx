import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/";
import { Container, Loader, ImageWithFallback } from "../../../components";
import styles from "./currencyLatest.module.css";
import { useGetLatestRatesQuery } from "../../../redux/";

export const CurrencyLatest: FC = () => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const data = useGetLatestRatesQuery(baseCurrency).data;
  if (!data) {
    return <Loader />;
  }
  const latestCurrencyRates = data.rates;
  return (
    <>
      <Container className={styles["display__Latest"]}>
        {presentCurrency ? (
          <>
            <div>
              <ImageWithFallback currencyCode={presentCurrency} className={styles["display__Flag"]} />
            </div>
            <span
              className={styles["latest-big"]}
            >{`Latest ${presentCurrency} to ${baseCurrency} rate:  ${latestCurrencyRates[presentCurrency]}`}</span>
            <span
              className={styles["latest-small"]}
            >{`${presentCurrency} to ${baseCurrency} ${latestCurrencyRates[presentCurrency]}`}</span>
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
