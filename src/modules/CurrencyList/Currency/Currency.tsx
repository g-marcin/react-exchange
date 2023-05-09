import { FC } from "react";
import { CurrencyType } from "../../../types";
import { Wrapper } from "../../../components/Wrapper";
import styles from "./currency.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CurrencyProps = {
  currency: CurrencyType;
  setPresentCurrency: React.Dispatch<React.SetStateAction<null | CurrencyType>>;
};

export const Currency: FC<CurrencyProps> = ({ currency, setPresentCurrency }) => {
  return (
    <Wrapper
      className={styles.currency}
      onClick={() => {
        setPresentCurrency(currency);
      }}
    >
      <div>{currency.name}</div>
      <div>{currency.currencyCode}</div>
      <div>{currency.country}</div>
      <div>{currency.countryCode}</div>
      <div>
        {Object.entries(currency.exchangeRates).map(([key, value]) => {
          return <div>{`${currency.currencyCode} exchange rate to ${key} is ${value}`}</div>;
        })}
      </div>
      <div>
        <FontAwesomeIcon icon={["fas", currency.iconName]} />
      </div>

      <button
        onClick={() => {
          setPresentCurrency(currency);
        }}
      >
        Show Currency
      </button>
    </Wrapper>
  );
};
