import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../auth/userSlice";

export const store = configureStore({
  reducer: {
    auth: counterReducer,
  },
});
