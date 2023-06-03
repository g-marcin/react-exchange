import { FC } from "react";
import { Container, Loader } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useCurrencyHistory } from "../../../hooks";
import { HistoryItem } from "./HistoryItem";
import styles from "./currencyHistory.module.css";

export const CurrencyHistory: FC = () => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const { currencyHistory, inProgress } = useCurrencyHistory();
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
