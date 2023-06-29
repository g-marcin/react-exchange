import { Store, configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "../currencySlice";
import { frankfurterApiSlice } from "../apiSlice";
import logger from "redux-logger";

export const store: Store = configureStore({
  reducer: {
    currency: currencyReducer,
    [frankfurterApiSlice.reducerPath]: frankfurterApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(frankfurterApiSlice.middleware).concat(logger).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
