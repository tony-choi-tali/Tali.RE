import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// reducers
import authUserReducer from "./authUser";

const rootReducer = combineReducers({
  authUser: authUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});
