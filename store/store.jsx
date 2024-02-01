import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../redux/cardSlice'; 

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
