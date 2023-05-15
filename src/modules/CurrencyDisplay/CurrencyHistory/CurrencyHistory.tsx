import { FC, useContext } from "react";
import { Container } from "../../../components";
import { HistoryItem } from "./HistoryItem";
import { CurrencyContext } from "../../../contexts";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <p>No context!</p>;
  }
  const { fetchedCurrenciesHistory, presentCurrency } = currencyContextObject;
  return (
    <>
      {presentCurrency && (
        <Container className={styles["display__History"]}>
          {Object.entries(fetchedCurrenciesHistory.rates)
            .map(([date, currencyRates], index) => {
              return (
                <HistoryItem
                  index={index}
                  date={date}
                  presentCurrency={presentCurrency}
                  currencyRates={currencyRates}
                  key={index}
                />
              );
            })
            .reverse()}
        </Container>
      )}
    </>
  );
};
