import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "../reducers/productsSlice";

export const store = configureStore({
    reducer: {
        productsList: ProductListReducer
    }
})