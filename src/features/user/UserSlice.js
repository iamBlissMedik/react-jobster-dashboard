import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../src/axios";
import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  user: null,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunk) => {
    try {
      const { data } = await customFetch.post("/auth/register", user);
      console.log(data);
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunk) => {
    try {
      const { data } = await customFetch.post("/auth/login", user);
      console.log(data);
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data.msg);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export default userSlice.reducer;
