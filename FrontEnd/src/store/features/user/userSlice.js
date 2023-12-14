import { createSlice } from "@reduxjs/toolkit";
import userServices from "./userServices";

const initialState = {
  Loading: false,
  Error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userServices.LoginUserAction.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(userServices.LoginUserAction.fulfilled, (state, action) => {
      state.Loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(userServices.LoginUserAction.rejected, (state, action) => {
      state.Loading = false;
      state.Error = action.payload;
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
