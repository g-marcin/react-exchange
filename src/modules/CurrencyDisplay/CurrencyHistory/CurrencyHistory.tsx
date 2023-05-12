import { FC } from "react";
import { Container } from "../../../components";
import { HistoryItem } from "./HistoryItem";
import { CurrencyHistoryProps } from "../../../types";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC<CurrencyHistoryProps> = ({ fetchedCurrenciesHistory, presentCurrency }) => {
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
