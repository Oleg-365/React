import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: []
};

export const productsSlice = createSlice({
    name: "productsList",
    initialState,
    reducers: {
        removeProduct: (state, action) => {
            state.productsList = state.productsList.filter(item => item.id !== action.payload.id);
        },
        addProduct: (state, action) => {
            state.productsList.push(action.payload);
        },
    }
});

export const { removeProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;