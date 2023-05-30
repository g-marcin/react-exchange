import { FC } from "react";
import { Wrapper } from "../../../../components";
import { CurrencyRates } from "../../../../types";
import styles from "./HistoryItem.module.css";

export type HistoryItemProps = {
  date: string;
  presentCurrency: string;
  currencyRates: CurrencyRates;
};

export const HistoryItem: FC<HistoryItemProps> = ({ date, presentCurrency, currencyRates }) => {
  return (
    <Wrapper className={styles["history__Item"]}>
      {
        <>
          <div className={styles["History__date"]}>{date}</div>
          <div className={styles["History__rate"]}>{presentCurrency && JSON.stringify(currencyRates[presentCurrency])}</div>
        </>
      }
    </Wrapper>
  );
};
