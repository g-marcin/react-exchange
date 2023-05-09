import { FC, SyntheticEvent } from "react";
import { CurrencyProps } from "../../../types";
import styles from "./currency.module.css";

export const Currency: FC<CurrencyProps> = ({
  currencyCode,
  currencyRate,
  currencyNames,
  currencyButtonHandler,
}) => {
  const currencyFlagImage = `https://flagsapi.com/${currencyCode.slice(0, 2)}/flat/64.png`;
  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        currencyButtonHandler(currencyCode);
      }}
    >
      {
        <img
          className={styles["currency__Flag"]}
          src={currencyFlagImage}
          onError={(event) => {
            addImageFallback(event);
          }}
        />
      }

      <span className={styles["currency__ItemSmall"]}>{`${currencyCode} `}</span>
      <span className={styles["currency__Name"]}>
        {currencyNames && currencyNames[`${currencyCode}`]}
      </span>
      <span className={styles["currency__ItemSmall"]}>{currencyRate.toFixed(2)}</span>
    </button>
  );

  function addImageFallback(event: SyntheticEvent<HTMLImageElement, Event>) {
    event.preventDefault();
    event.nativeEvent.preventDefault();
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }
};
