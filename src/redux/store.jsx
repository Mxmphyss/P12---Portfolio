import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./reducers/colorReducer";

const store = configureStore({
  reducer: {
    theme: colorReducer,
  },
});

export default store;