import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get("");
    return response.data;
});

const initialState = {
  
};

export const cardSlice = createSlice({

});

export default cardSlice.reducer;
