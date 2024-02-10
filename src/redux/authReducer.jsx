import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: null,
  loading: false,
  error: null,
  signupAuthenticated: false,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    signupSuccess(state, action) {
      state.loading = false;
      state.signupAuthenticated = true;
      state.users = action.payload;
    },
    signupFail(state, action) {
      state.error = action.payload;
    },
    resetError(state) {
      state.signupAuthenticated = null;
    },
  },
});
export const { signupSuccess, resetError } = cardSlice.actions;
export default cardSlice.reducer;
