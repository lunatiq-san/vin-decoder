import { carsReducer } from "./cars";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    car: carsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
