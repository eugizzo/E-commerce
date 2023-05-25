import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
 cart: []
};
  

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action){
      state.cart.push(action.payload);
    },
    removeCart(state, action){
      const index = action.payload;
      state.cart = state.cart.filter((item)=>
      item.id !== index)
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const getAllCart=(state) => state.cart.cart
export default cartSlice.reducer;

