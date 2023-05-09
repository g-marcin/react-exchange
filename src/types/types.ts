import { PropsWithChildren } from "react";

export type CurrencyType = {
  currencyCode: string;
  rate: number;
};

export type FetchedCurrenciesType = {
  amount: number;
  base: string;
  date: string;
  rates: rates;
} | null;

export type FetchedCurrenciesHistoryType = {
  amount: number;
  base: string;
  start_date?: string;
  end_date?: string;
  rates: rates;
} | null;

export type rates = any;

export type CurrencyDisplayProps = {
  presentCurrency: CurrencyType | null;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryType;
};

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export type CurrencyProps = {
  currencyCode: string;
  currencyRate: any;
  currencyButtonHandler: (currencyCode: string) => void;
  currencyNames: { [k: string]: string };
  key: string;
};

export type CurrencyListProps = {
  currencyButtonHandler: (currencyCode: string) => void;
  fetchedCurrencies: FetchedCurrenciesType;
  currencyNames: { [k: string]: string };
};
