import { FC, SyntheticEvent } from "react";
import { CurrencyLatestProps } from "../../../types";
import { Container } from "../../../components";
import styles from "./currencyLatest.module.css";

export const CurrencyLatest: FC<CurrencyLatestProps> = ({ presentCurrency, baseCurrency }) => {
  const presentCurrencyFlagImage = `https://flagsapi.com/${presentCurrency?.currencyCode.slice(
    0,
    2
  )}/flat/64.png`;
  const baseCurrencyFlagImage = `https://flagsapi.com/${baseCurrency.slice(0, 2)}/flat/64.png`;
  return (
    <>
      <Container className={styles["display__Latest"]}>
        {presentCurrency ? (
          <>
            {" "}
            <img
              className={styles["display__Flag"]}
              src={presentCurrencyFlagImage}
              onError={(event) => {
                addImageFallback(event);
              }}
              alt="?"
            />
            {`Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate:${presentCurrency.rate}`}
            <img
              className={styles["display__Flag"]}
              src={baseCurrencyFlagImage}
              alt=""
              onError={(event) => {
                addImageFallback(event);
              }}
            />
          </>
        ) : (
          `Please choose currency to compare...`
        )}
      </Container>
    </>
  );
  function addImageFallback(event: SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }
};
