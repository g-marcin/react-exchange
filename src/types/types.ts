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
export interface FetchedCurrenciesDTO extends ICurrenciesData {
  rates: CurrencyRates;
}
export interface FetchedCurrenciesHistoryType extends ICurrenciesData {
  rates: PastCurrencyRates;
}
export interface FetchedCurrenciesHistoryDTO extends ICurrenciesData {
  rates: PastCurrencyRates;
}
export type CurrencyRates = { [k: string]: number };
export type PastCurrencyRates = { [date: string]: CurrencyRates };
export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}
export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
};
export type CurrencyHistoryProps = {
  presentCurrency: CurrencyType;
  fetchedCurrenciesHistory: FetchedCurrenciesHistoryType;
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
  latestCurrencyRates: CurrencyRates;
  pastCurrenciesRates: PastCurrencyRates;
  fetchedCurrencyNames: FetchedCurrencyNamesType;
  presentCurrency: CurrencyType;
  baseCurrency: string;
  currencyButtonHandler: CurrencyButtonHandlerType;
  currencyBaseHandler: CurrencyBaseHandlerType;
} | null;
