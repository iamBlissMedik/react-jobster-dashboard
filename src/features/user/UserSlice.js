import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../src/axios";
const initialState = {
  isLoading: false,
  user: null,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunk) => {
    try {
      const { data } = await customFetch.post("/auth/testingRegister", user);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunk) => {
    console.log(user);
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
