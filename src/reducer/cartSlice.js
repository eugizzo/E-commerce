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
      const index = state.indexOf(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const getAllCart=(state) => state.cart
export default cartSlice.reducer;

