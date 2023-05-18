import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
  

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action){
      state.push(action.payload);
    },
    removeCart(state, action){
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const getAllCart=(state) => state.cart
export default cartSlice.reducer;

