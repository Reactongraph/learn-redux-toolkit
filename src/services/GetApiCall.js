import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API using createApi
export const getApiCall = createApi({
  // Specify the reducer path for the API
  reducerPath: "getApiCall",

  // Configure the base query with the API base URL
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),

  // Define endpoints for the API
  endpoints: (builder) => ({
    // Define a query endpoint named getData
    getData: builder.query({
      // Specify the query function to fetch data from the "products" endpoint
      query: () => ({
        url: "products",
        method: "get",
      }),
    }),
  }),
});

// Extract the generated hooks from the API
export const { useGetDataQuery } = getApiCall;
