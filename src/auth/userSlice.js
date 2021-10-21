import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      login: "developer21",
      password: "123456",
    },
  ],
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
