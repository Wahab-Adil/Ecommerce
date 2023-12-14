import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl.js";

export const LoginUserAction = createAsyncThunk(
  "/user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/api/user/login`, payload);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const userServices = {
  LoginUserAction,
};
export default userServices;
