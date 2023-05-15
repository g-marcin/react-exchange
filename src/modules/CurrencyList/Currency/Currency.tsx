import { FC, useContext } from "react";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { CurrencyProps } from "../../../types";
import { CurrencyContext } from "../../../contexts";
import styles from "./currency.module.css";

export const Currency: FC<CurrencyProps> = ({ currencyCode, currencyRate }) => {
  const currencyContextObject = useContext(CurrencyContext);

  const currencyButtonHandler = currencyContextObject?.currencyButtonHandler;
  const presentCurrency = currencyContextObject?.presentCurrency;
  const currencyNames = currencyContextObject?.fetchedCurrencyNames;
  if (!currencyNames) {
    return <p>No context!</p>;
  }

  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        if (!currencyButtonHandler) {
          return;
        }
        currencyButtonHandler(currencyCode);
        console.log(presentCurrency);
      }}
    >
      <ImageWithFallback currencyCode={currencyCode} className={styles["currency__Flag"]} />
      <span className={styles["currency__ItemSmall"]}>{`${currencyCode} `}</span>
      <span className={styles["currency__Name"]}>{currencyNames[`${currencyCode}`]}</span>
      <span className={styles["currency__ItemSmall"]}>{currencyRate.toFixed(2)}</span>
    </button>
  );
};
