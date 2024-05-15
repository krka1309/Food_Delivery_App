import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import filterSlice from "./FilterProducts/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: filterSlice.reducer,
  },
});

export default store;
