import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "../redux/authReducer"

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
