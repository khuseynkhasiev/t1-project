import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartProductsSlice/cartProductsSlice";
import { productsApi } from "./api/productsApi";
import { cartsApi } from "./api/cartsApi";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [cartsApi.reducerPath]: cartsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware,
            cartsApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
