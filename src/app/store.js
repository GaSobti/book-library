import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  },
});