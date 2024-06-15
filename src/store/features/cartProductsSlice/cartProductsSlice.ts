import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../../../interfaces/data";
import { cartsApi } from "../../api/cartsApi";

const cartState: ICart = {
    discountedTotal: 0,
    id: 0,
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
        setCart: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            cartsApi.endpoints.getCart.matchFulfilled,
            (state, action: PayloadAction<ICart>) => {
                return action.payload;
            }
        );
        // .addMatcher(
        //     cartsApi.endpoints.getCarts.matchFulfilled,
        //     (state, action: PayloadAction<ICart[]>) => {
        //         if (action.payload.length > 0) {
        //             return action.payload[0]; // Замените это на соответствующую логику для выбора нужной корзины
        //         }
        //     }
        // );
    },
});

export const { setCart } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
