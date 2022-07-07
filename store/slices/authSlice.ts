import AuthService from "../../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoad, stopLoad } from "./appSlice";
import { handleError } from "./errorSlice";

export const createUser = createAsyncThunk(
  "/register",
  async (data: string, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await AuthService.registerUser(data);

      console.log("res", res);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

export const loginUser = createAsyncThunk(
  "/login",
  async (data: string, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await AuthService.loginUser(data);

      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

const initialState = {
  register: "",
  login: "",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.register = payload;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.login = payload;
    });
  },
});

const { reducer } = AuthSlice;

export default reducer;
