import { FC, SyntheticEvent } from "react";
import { CurrencyLatestProps } from "../../../types";
import styles from "./currencyLatest.module.css";
import { Container } from "../../../components";

export const CurrencyLatest: FC<CurrencyLatestProps> = ({ presentCurrency, baseCurrency }) => {
  const presentCurrencyFlagImage = `https://flagsapi.com/${presentCurrency.currencyCode.slice(
    0,
    2
  )}/flat/64.png`;
  const baseCurrencyFlagImage = `https://flagsapi.com/${baseCurrency.slice(0, 2)}/flat/64.png`;
  return (
    <Container className={styles["display__Latest"]}>
      <img src={presentCurrencyFlagImage} alt="?" placeholder="?" />
      {presentCurrency
        ? `Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate: ${presentCurrency?.rate}`
        : `Please choose currency to compare...`}
      <img
        className={styles["display__Flag"]}
        src={baseCurrencyFlagImage}
        alt=""
        onError={(event) => {
          addImageFallback(event);
        }}
      />
    </Container>
  );
  function addImageFallback(event: SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }
};
