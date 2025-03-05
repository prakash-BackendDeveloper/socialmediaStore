import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice";

export const socialmediaStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
  },
});
