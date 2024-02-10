import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://etechpolltesting.onrender.com/";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});

export const loginUser = createAsyncThunk("loginUser", async (credentials) => {
  // console.log(credentials);
  const response = await axios.get(`${BASE_URL}login`, { params: credentials });
  return response.data;
});

export const signupUser = createAsyncThunk("signupUser", async (userData) => {
  // console.log(userData);
  const signupData = {
    username: userData.username,
    password: userData.password,
    role: userData.role
  };
  const response = await axios.get(`${BASE_URL}add_user`, { params: signupData});
  return response.data;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default cardSlice.reducer;
