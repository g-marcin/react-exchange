interface ICurrenciesData {
  amount: number;
  base: string;
  date: string;
}
export interface FetchedCurrenciesDTO extends ICurrenciesData {
  rates: CurrencyRates;
}
export interface FetchedCurrenciesHistoryDTO extends ICurrenciesData {
  rates: PastCurrencyRates;
}
export type CurrencyType = {
  currencyCode: string;
  rate: number;
} | null;
export type CurrencyRates = { [k: string]: number };
export type PastCurrencyRates = { [date: string]: CurrencyRates };
export type FetchedCurrencyNamesType = {
  [k: string]: string;
};
export type CurrencyBaseHandlerType = (currencyCode: string) => void;
export type CurrencyButtonHandlerType = (currencyCode: string) => void;
export type StateHandler = () => void;
export type CurrencyContextType = {
  latestCurrencyRates: CurrencyRates;
  fetchedCurrencyNames: FetchedCurrencyNamesType;
  presentCurrency: CurrencyType;
  baseCurrency: string;
  currencyButtonHandler: CurrencyButtonHandlerType;
  currencyBaseHandler: CurrencyBaseHandlerType;
};
export type ThemeContextType = {
  isDark: boolean;
  themeButtonHandler: StateHandler;
};
