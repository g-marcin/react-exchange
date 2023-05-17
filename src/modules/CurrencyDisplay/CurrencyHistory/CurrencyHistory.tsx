import { FC, useContext } from "react";
import { Container, Loader } from "../../../components";
import { HistoryItem } from "./HistoryItem";
import { CurrencyContext } from "../../../contexts";
import { useCurrencyHistory } from "../../../hooks";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  const { presentCurrency, baseCurrency } = currencyContextObject || {
    presentCurrency: { currencyCode: "BGN", rate: 0 },
    baseCurrency: "AUD",
  };
  const pastCurrenciesRates = useCurrencyHistory(baseCurrency, presentCurrency);
  if (!pastCurrenciesRates) {
    return <Loader />;
  }
  return (
    <>
      {presentCurrency && (
        <Container className={styles["display__History"]}>
          {Object.entries(pastCurrenciesRates)
            .map(([date, currencyRates], index) => {
              return <HistoryItem date={date} presentCurrency={presentCurrency} currencyRates={currencyRates} key={index} />;
            })
            .reverse()}
        </Container>
      )}
    </>
  );
};
