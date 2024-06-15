import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartsApi = createApi({
    reducerPath: "cartsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (build) => ({
        getCart: build.query({
            query: (id) => `/carts/${id}`,
        }),
        getCarts: build.query({
            query: (id) => `/carts/user/${id}`,
        }),
    }),
});

export const { useGetCartQuery, useGetCartsQuery } = cartsApi;
