import { FC } from "react";
import { CurrencyType } from "../../../types";
import { Wrapper } from "../../../components/Wrapper";
import styles from "./currency.module.css";

type CurrencyProps = {
  currency: CurrencyType;
  currencyButtonHandler: (value: CurrencyType) => void;
};

export const Currency: FC<CurrencyProps> = ({ currency, currencyButtonHandler }) => {
  return (
    <Wrapper
      className={styles.currency}
      onClick={() => {
        currencyButtonHandler(currency);
      }}
    >
      <div>{currency.currencyCode}</div>

      <button
        onClick={() => {
          currencyButtonHandler(currency);
        }}
      >
        Show Currency
      </button>
    </Wrapper>
  );
};
