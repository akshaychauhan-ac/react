import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/createBook";

export default configureStore({
  reducer: {
    books: bookReducer,
  },
})