import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../../../interfaces/data";
import { cartsApi } from "../../api/cartsApi";

const cartState: ICart = {
    id: 0,
    discountedTotal: 0,
    products: [],
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 0,
};

export const cartProductsSlice = createSlice({
    name: "cartProducts",
    initialState: cartState,
    reducers: {
        updateCart: (state, action: PayloadAction<ICart>) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            cartsApi.endpoints.getCart.matchFulfilled,
            (state, action: PayloadAction<ICart>) => {
                const sortedProducts = action.payload.products;
                return {
                    ...action.payload,
                    products: sortedProducts,
                };
            }
        );
    },
});

export const { updateCart } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
