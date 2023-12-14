import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./combineReducers";

const store = configureStore({ reducer: combineReducer });
export default store;
