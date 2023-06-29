import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getDefaultCurrency } from "../../common";
import { CurrencyState } from "../../types";

const initialState: CurrencyState = {
  presentCurrency: getDefaultCurrency() || "",
  baseCurrency: "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    setPresentCurrency: (state, action: PayloadAction<string>) => {
      state.presentCurrency = action.payload;
    },
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
  },
});
export const { setPresentCurrency, setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
