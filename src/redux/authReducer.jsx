import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: null,
  loading: false,
  error: null,
  signupAuthenticated: false,
  loginAuthenticated: false,
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
    loginSuccess(state, action) {
      state.loading = false;
      state.loginAuthenticated = true;
      state.users = action.payload;
    },
    loginFail(state, action) {
      state.error = action.payload;
    },
    LoginresetError(state) {
      state.loginAuthenticated = null;
    },
  },
});

export const { signupSuccess, resetError, loginSuccess, LoginresetError } =
  cardSlice.actions;
export default cardSlice.reducer;
