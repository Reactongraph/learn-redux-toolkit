import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import todoReducer from "../redux/TodoSlice";
import { getApiCall } from "../services/GetApiCall";

export const Store = configureStore({
  // Define reducers for the store
  reducer: {
    // Add the todoReducer to handle local state
    todo: todoReducer,
    // Add the API call reducer using the reducerPath from the service
    [getApiCall.reducerPath]: getApiCall.reducer,
  },

  // Configure middleware for the store
  middleware: (getDefaultMiddleware) =>
    // Concatenate the default middleware with the API call middleware
    getDefaultMiddleware().concat(getApiCall.middleware),
});

// Set up listeners for the store to handle API query actions
setupListeners(Store.dispatch);
