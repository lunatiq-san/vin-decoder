import { carsReducer } from "./cars";
import { variablesReducer } from "./variables";
import { variableReducer } from "./variable";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    car: carsReducer,
    variables: variablesReducer,
    variable: variableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
