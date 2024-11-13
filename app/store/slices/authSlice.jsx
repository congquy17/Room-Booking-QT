// src/features/auth/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // User includes user and organization information
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
    addFavorite: (state, action) => {
      // Adds a favorite to the user's favorites array
      if (state.user && !state.user.favorites.includes(action.payload)) {
        state.user.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      // Removes a favorite from the user's favorites array
      if (state.user) {
        state.user.favorites = state.user.favorites.filter(
          (favorite) => favorite !== action.payload
        );
      }
    },
  },
});

export const {
  login,
  logoutUser,
  updateUser,
  addFavorite,
  removeFavorite,
} = authSlice.actions;

export default authSlice.reducer;
