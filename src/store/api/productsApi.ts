import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsResponse, IProduct } from "../../interfaces/data";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ["Products"],
    endpoints: (build) => ({
        getProducts: build.query<IProductsResponse, number>({
            query: (limit) => `/products?limit=${limit}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.products.map(({ id }) => ({
                              type: "Products" as const,
                              id,
                          })),
                          { type: "Products" as const, id: "LIST" },
                      ]
                    : [{ type: "Products" as const, id: "LIST" }],
        }),
        searchProducts: build.query<IProductsResponse, string>({
            query: (name) => `/products/search?q=${name}`,
            providesTags: () => [{ type: "Products" as const, id: "LIST" }],
        }),
        getProduct: build.query<IProduct, number>({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazySearchProductsQuery,
    useGetProductQuery,
} = productsApi;
