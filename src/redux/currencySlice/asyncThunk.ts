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
