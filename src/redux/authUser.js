import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authUserSlice = createSlice({
  name: "auth-user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    removeAuthUser: (state) => {
      state.user = null;
    },
  },
});

export const { removeAuthUser, setAuthUser } = authUserSlice.actions;

export default authUserSlice.reducer;
