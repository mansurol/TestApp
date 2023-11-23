import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./newSlice";
export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    system: systemReducer,
  },
});
