import { createSlice } from "@reduxjs/toolkit";
import { bookForm, getAllCatalog } from "./catalogOperations";

const initialState = {
    catalog: [],
    isLoading: false,
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllCatalog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCatalog.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.catalog = [...payload];
            })
            .addCase(getAllCatalog.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(bookForm.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(bookForm.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(bookForm.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const catalogReducer = catalogSlice.reducer;
