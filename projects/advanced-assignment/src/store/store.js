import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

// holds all the slices created
const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default store;
