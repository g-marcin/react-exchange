import { FC, useContext } from "react";
import { Container, Loader } from "../../../components";
import { HistoryItem } from "./HistoryItem";
import { CurrencyContext } from "../../../contexts";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <Loader />;
  }
  const { presentCurrency, pastCurrenciesRates } = currencyContextObject;
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
