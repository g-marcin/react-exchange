import { PropsWithChildren } from "react";
export type CurrencyType = {
  currencyCode: string;
  rate: number;
} | null;
interface ICurrenciesData {
  amount: number;
  base: string;
  date: string;
}
export interface FetchedCurrenciesProps extends ICurrenciesData {
  rates: rates;
}
export interface FetchedCurrenciesHistoryProps extends ICurrenciesData {
  rates: { [date: string]: rates };
}
export type rates = { [k: string]: number };
export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}
export type CurrencyDisplayProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryProps;
  currencyBaseHandler: (currencyCode: string, presentCurrency: CurrencyType) => void;
  baseCurrency: string;
  currencyNames: { [k: string]: string };
};
export type CurrencyListProps = {
  currencyButtonHandler: (currencyCode: string) => void;
  fetchedCurrencies: FetchedCurrenciesProps;
  currencyNames: { [k: string]: string };
};
export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
  currencyButtonHandler: (currencyCode: string) => void;
  currencyNames: { [k: string]: string };
  key: string;
};
export type CurrencyLatestProps = {
  presentCurrency: CurrencyType;
  baseCurrency: string;
};
export type CurrencyHistoryProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryProps;
};
export type HistoryItemProps = {
  index: number;
  date: string;
  presentCurrency: CurrencyType;
  currencyRates: rates;
};
export type CurrencyBaseProps = {
  currencyBaseHandler: (currencyCode: string, presentCurrency: CurrencyType) => void;
  presentCurrency: CurrencyType;
  currencyNames: { [k: string]: string };
};
