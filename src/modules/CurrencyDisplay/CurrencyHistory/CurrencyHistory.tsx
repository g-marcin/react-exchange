import { FC, useContext } from "react";
import { Container, Loader } from "../../../components";
import { HistoryItem } from "./HistoryItem";
import { CurrencyContext } from "../../../contexts";
import { useCurrencyHistory } from "../../../hooks";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  const { presentCurrency, baseCurrency } = currencyContextObject;
  const { currencyHistory, inProgress } = useCurrencyHistory(baseCurrency, presentCurrency);
  if (!currencyHistory) {
    return <Loader />;
  }
  return (
    <>
      {!inProgress ? (
        <Container className={styles["display__History"]}>
          {Object.entries(currencyHistory)
            .map(([date, currencyRates], index) => {
              return <HistoryItem date={date} presentCurrency={presentCurrency} currencyRates={currencyRates} key={index} />;
            })
            .reverse()}
        </Container>
      ) : (
        <Container className={styles.center}>
          <Loader />
        </Container>
      )}
    </>
  );
};
