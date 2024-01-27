import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  user: null,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunk) => {
    console.log(`Register user : ${user}`);
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunk) => {
    console.log(`Login user : ${user}`);
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
