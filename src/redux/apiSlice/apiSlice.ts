import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const frankfurterApiSlice = createApi({
  reducerPath: "frankfurterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.frankfurter.app",
  }),
  endpoints: (builder) => ({
    getCurrencyNames: builder.query<{ [k: string]: string }, void>({
      query: () => `/currencies`,
    }),
    getLatestRates: builder.query<{ rates: { [k: string]: number } }, void>({
      query: (baseCurrency) => `/latest?from=${baseCurrency}`,
    }),
  }),
});
export const { useGetCurrencyNamesQuery, useGetLatestRatesQuery } = frankfurterApiSlice;
