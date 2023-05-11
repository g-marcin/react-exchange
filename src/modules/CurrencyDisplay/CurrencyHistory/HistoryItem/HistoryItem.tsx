import { FC } from "react";
import { Wrapper } from "../../../../components";
import { HistoryItemProps } from "../../../../types";
import styles from "./HistoryItem.module.css";

export const HistoryItem: FC<HistoryItemProps> = ({ index, date, presentCurrency, currencyRates }) => {
  return (
    <Wrapper className={styles["history__Item"]} key={index}>
      {presentCurrency && (
        <>
          <div>{date}</div>
          <div>{presentCurrency && JSON.stringify(currencyRates[presentCurrency.currencyCode])}</div>
        </>
      )}
    </Wrapper>
  );
};
