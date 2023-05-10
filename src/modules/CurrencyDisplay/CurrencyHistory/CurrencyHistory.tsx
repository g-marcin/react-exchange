import { FC } from "react";
import { Wrapper, Container } from "../../../components";
import { CurrencyHistoryProps } from "../../../types";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC<CurrencyHistoryProps> = ({
  fetchedCurrenciesHistory,
  presentCurrency,
}) => {
  return (
    <Container className={styles["display__History"]}>
      {fetchedCurrenciesHistory &&
        Object.entries(fetchedCurrenciesHistory.rates)
          .map(([date, currencyRates], index) => {
            return (
              <Wrapper className={styles["history__Item"]} key={index}>
                <div style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>{date}</div>
                <div>
                  {presentCurrency && JSON.stringify(currencyRates[presentCurrency.currencyCode])}
                </div>
              </Wrapper>
            );
          })
          .reverse()}
    </Container>
  );
};
