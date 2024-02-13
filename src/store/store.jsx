import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../redux/authReducer";
// import adminSlice from "../redux/adminSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    // admin: adminSlice,
  },
});
