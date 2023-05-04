import { CurrencyType } from "../types";

export const currencyData: CurrencyType[] = [
  {
    name: "us-dollar",
    currencyCode: "USD",
    country: "United States of America",
    countryCode: "USA",
    exchangeRates: {
      PLN: 4.15,
      EUR: 0.9,
    },
  },
  {
    name: "zloty",
    currencyCode: "PLN",
    country: "Poland",
    countryCode: "PL",
    exchangeRates: {
      USD: 0.24,
      EUR: 0.22,
    },
  },
  {
    name: "euro",
    currencyCode: "EUR",
    country: "European Union",
    countryCode: null,
    exchangeRates: {
      USD: 1.11,
      PLN: 4.59,
    },
  },
];
