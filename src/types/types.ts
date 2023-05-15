import { PropsWithChildren } from "react";
export interface WrapperProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}
export type CurrencyType = {
  currencyCode: string;
  rate: number;
} | null;
interface ICurrenciesData {
  amount: number;
  base: string;
  date: string;
}
export interface FetchedCurrenciesType extends ICurrenciesData {
  rates: rates;
}
export interface FetchedCurrenciesHistoryType extends ICurrenciesData {
  rates: { [date: string]: rates };
}
export type rates = { [k: string]: number };
export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}

export type CurrencyListProps = {
  currencyButtonHandler: (currencyCode: string) => void;
  fetchedCurrencies: FetchedCurrenciesType;
  currencyNames: { [k: string]: string };
};
export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
};
export type CurrencyLatestProps = {
  presentCurrency: CurrencyType;
  baseCurrency: string;
};
export type CurrencyHistoryProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryType;
};
export type HistoryItemProps = {
  index: number;
  date: string;
  presentCurrency: CurrencyType;
  currencyRates: rates;
};
export type CurrencyBaseProps = {
  currencyBaseHandler: CurrencyBaseHandlerType;
  presentCurrency: CurrencyType;
  currencyNames: { [k: string]: string };
};
export type ImageWithFallbackProps = {
  currencyCode: string;
  className: string;
};
export type FetchedCurrencyNamesType = {
  [k: string]: string;
};
export type CurrencyBaseHandlerType = (currencyCode: string) => void;
export type CurrencyButtonHandlerType = (currencyCode: string) => void;
export type CurrencyContextType = {
  fetchedCurrencies: FetchedCurrenciesType;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryType;
  fetchedCurrencyNames: FetchedCurrencyNamesType;
  presentCurrency: CurrencyType;
  baseCurrency: string;
  currencyButtonHandler: CurrencyButtonHandlerType;
  currencyBaseHandler: CurrencyBaseHandlerType;
} | null;
