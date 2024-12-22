import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const aapStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default aapStore;
