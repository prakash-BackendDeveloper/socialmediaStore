import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const socialmediaStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
