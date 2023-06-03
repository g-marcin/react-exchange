import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDefaultCurrency } from "../../common";

const initialState: CurrencyState = {
  presentCurrency: getDefaultCurrency() || "",
  baseCurrency: "USD",
};
const fetchLatest = createAsyncThunk("currency/fetchLatest", async () => {
  const response = await fetch(`https://api.frankfurter.app/latest`).then((response) => response.json());
  return response;
});
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
  extraReducers: (builder) => {
    builder.addCase(fetchLatest.rejected, (state, action) => {
      console.log(state, action);
    });
  },
});
export const { setPresentCurrency, setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;

type CurrencyState = {
  presentCurrency: string;
  baseCurrency: string;
};
