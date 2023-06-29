import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const frankfurterApiSlice = createApi({
  reducerPath: "frankfurterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.frankfurter.app",
    //  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token;
    // // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
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
