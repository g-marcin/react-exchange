import { PropsWithChildren } from "react";

export type CurrencyType = {
  currencyCode: string;
  rate: number;
};
export interface IFetchedCurrencies extends ICurrenciesData {
  rates: rates;
}
export interface IFetchedCurrenciesHistory extends ICurrenciesData {
  rates: { [date: string]: rates };
}
interface ICurrenciesData {
  amount: number;
  base: string;
  date: string;
}
export type rates = { [k: string]: number };

export type CurrencyDisplayProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: IFetchedCurrenciesHistory;
  currencyBaseHandler: (currencyCode: string, presentCurrency: CurrencyType) => void;
  baseCurrency: string;
  currencyNames: { [k: string]: string };
};

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
  currencyButtonHandler: (currencyCode: string) => void;
  currencyNames: { [k: string]: string };
  key: string;
};

export type CurrencyListProps = {
  currencyButtonHandler: (currencyCode: string) => void;
  fetchedCurrencies: IFetchedCurrencies;
  currencyNames: { [k: string]: string };
};

export type CurrencyBaseProps = {
  currencyBaseHandler: (currencyCode: string, presentCurrency: CurrencyType) => void;
  presentCurrency: CurrencyType;
  currencyNames: { [k: string]: string };
};

export type CurrencyHistoryProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: IFetchedCurrenciesHistory;
};

export type CurrencyLatestProps = {
  presentCurrency: CurrencyType;

  baseCurrency: string;
};
