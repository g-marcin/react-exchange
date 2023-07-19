import { FC, useContext } from "react";
import { Container, Loader } from "../../../components";
import { CurrencyContext } from "../../../contexts";
// import { useCurrencyHistory } from "../../../hooks";
import { HistoryItem } from "./HistoryItem";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const currencyContextObject = useContext(CurrencyContext);
  const { presentCurrency, currencyHistory } = currencyContextObject;
  // const { currencyHistory, inProgress } = useCurrencyHistory();
  const inProgress = false;
  if (!currencyHistory) {
    return <Loader />;
  }

  return (
    <>
      {!inProgress ? (
        <Container className={styles["display__History"]}>
          {Object.entries(currencyHistory)
            .map(([date, currencyRates], index) => {
              return (
                <HistoryItem
                  date={date}
                  presentCurrency={presentCurrency}
                  currencyRates={currencyRates}
                  key={index}
                />
              );
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
