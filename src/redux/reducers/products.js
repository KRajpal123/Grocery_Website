import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "productsList",
  initialState: {
    productsList: {},
  },
  reducers: {
    setProductsList: (state, { payload }) => {
        state.productsList = payload;
    }
  },
});

export const {setProductsList} = products.actions;
export default products.reducer;