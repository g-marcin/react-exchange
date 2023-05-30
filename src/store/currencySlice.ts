import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getDefaultCurrency } from "../common";
type CurrencyState = {
  presentCurrency: string;
  baseCurrency: string;
};
const initialState: CurrencyState = {
  presentCurrency: getDefaultCurrency() || "",
  baseCurrency: "AUD",
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
export default currencySlice.reducer;
