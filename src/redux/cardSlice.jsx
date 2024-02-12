import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signupSuccess } from "./authReducer";
import { loginSuccess } from "./authReducer";

const BASE_URL = "https://etechpolltesting.onrender.com/";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});

export const signupUser = createAsyncThunk(
  "signupUser",
  async (userData, { dispatch }) => {
    console.log(userData);
    const signupData = {
      username: userData.username,
      password: userData.password,
      role: userData.role,
    };
    const response = await axios.get(`${BASE_URL}add_user`, {
      params: signupData,
    });
    console.log(response.data);

    if (response.data.error === 0) {
      dispatch(signupSuccess(response.data.data));
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (credentials, { dispatch }) => {
    console.log(credentials);
    const loginData = {
      username: credentials.username,
      password: credentials.password,
    };

    const response = await axios.get(`${BASE_URL}login`, {
      params: loginData,
    });

    console.log(response.data);

    if (response.data.error === 0) {
      dispatch(loginSuccess(response.data.data));
    }
  }
);
