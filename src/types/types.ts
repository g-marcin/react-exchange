export type CurrencyType = {
  name: string;
  currencyCode: string;
  country: string;
  countryCode: string | null;
  exchangeRates: {
    PLN?: number;
    EUR?: number;
    USD?: number;
  };
};
