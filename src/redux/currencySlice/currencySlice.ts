import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getDefaultCurrency } from "../../common";

const initialState: CurrencyState = {
  presentCurrency: getDefaultCurrency() || "",
  baseCurrency: "USD",
};

type CurrencyState = {
  presentCurrency: string;
  baseCurrency: string;
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

// const fetchLatest = createAsyncThunk("currency/fetchLatest", async () => {
//   console.log(fetchLatest);

//   const response = await fetch(`https://api.frankfurter.app/latest`).then((response) => response.json());
//   return Promise.reject("thunk");
// });

// extraReducers: (builder) => {
//   builder.addCase(fetchLatest.rejected, (state, action) => {
//     console.log("THUNK");
//   });
// },
