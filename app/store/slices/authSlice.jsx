// src/features/auth/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, //include user and organization
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  logoutUser,
  updateUser,
  login
} = authSlice.actions;
export default authSlice.reducer;
