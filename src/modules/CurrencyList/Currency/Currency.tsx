import { FC } from "react";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { CurrencyProps } from "../../../types";
import styles from "./currency.module.css";

export const Currency: FC<CurrencyProps> = ({ currencyCode, currencyRate, currencyNames, currencyButtonHandler }) => {
  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        currencyButtonHandler(currencyCode);
      }}
    >
      <ImageWithFallback currencyCode={currencyCode} className={styles["currency__Flag"]} />
      <span className={styles["currency__ItemSmall"]}>{`${currencyCode} `}</span>
      <span className={styles["currency__Name"]}>{currencyNames[`${currencyCode}`]}</span>
      <span className={styles["currency__ItemSmall"]}>{currencyRate.toFixed(2)}</span>
    </button>
  );
};
