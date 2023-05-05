import { FC } from "react";
import { CurrencyType } from "../../../types";
import { Wrapper } from "../../../components/Wrapper";

type CurrencyProps = {
  currency: CurrencyType;
  setPresentCurrency: React.Dispatch<React.SetStateAction<null | CurrencyType>>;
};

export const Currency: FC<CurrencyProps> = ({ currency, setPresentCurrency }) => {
  return (
    <Wrapper>
      <div>{currency.name}</div>
      <div>{currency.currencyCode}</div>
      <div>{currency.country}</div>
      <div>{currency.countryCode}</div>
      <div>
        {Object.entries(currency.exchangeRates).map(([key, value]) => {
          return <div>{`${currency.currencyCode} exchange rate to ${key} is ${value}`}</div>;
        })}
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
