import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, { payload: productName }) => {
      console.log(productName);
      // state.productList.push(action.payload);
      state.productList.push(productName);
    }
  },
});

export const { addToProductList } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export default productSlice.reducer;