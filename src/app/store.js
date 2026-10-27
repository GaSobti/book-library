import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "../features/books/bookSlice";
import filterReducer from "../features/filter/filterSlice";

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "book-library",
  storage,
  whitelist: ["books", "filter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);