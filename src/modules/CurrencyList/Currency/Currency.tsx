import { FC } from "react";
import { CurrencyType } from "../../../types";
import { Wrapper } from "../../../components/Wrapper";
import styles from "./currency.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LineChart, Line } from "recharts";

type CurrencyProps = {
  currency: CurrencyType;
  setPresentCurrency: React.Dispatch<React.SetStateAction<null | CurrencyType>>;
  key: number;
};

export const Currency: FC<CurrencyProps> = ({ currency, setPresentCurrency, key }) => {
  return (
    <Wrapper
      className={styles.currency}
      onClick={() => {
        setPresentCurrency(currency);
      }}
      key={key}
    >
      <div>{currency.name}</div>
      <div>{currency.currencyCode}</div>
      <div>{currency.country}</div>
      <div>{currency.countryCode}</div>
      <div>
        {Object.entries(currency.exchangeRates).map(([key, value], index) => {
          return (
            <div key={index}>{`${currency.currencyCode} exchange rate to ${key} is ${value}`}</div>
          );
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
