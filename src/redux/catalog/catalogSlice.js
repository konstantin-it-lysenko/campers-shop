import { createSlice } from "@reduxjs/toolkit";
import { bookForm, getAllCatalog, getTotal } from "./catalogOperations";
import { handlePending, handleRejected } from "../../redux/helpers";

const initialState = {
    catalog: [],
    total: 13,
    favorites: JSON.parse(localStorage.getItem("persist:favorites"))?.favorites ?? [],
    isLoading: false,
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        addToFavorites: (state, { payload }) => {
            state.favorites.push(payload)
        },
        removeFromFavorites: (state, { payload }) => {
            state.favorites.filter((card) => card._id !== payload)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllCatalog.pending, handlePending)
            .addCase(getAllCatalog.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.catalog = [...payload];
            })
            .addCase(getAllCatalog.rejected, handleRejected)
            .addCase(bookForm.pending, handlePending)
            .addCase(bookForm.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(bookForm.rejected, handleRejected)
            .addCase(getTotal.pending, handlePending)
            .addCase(getTotal.fulfilled, (state, { payload }) => {
                state.total = payload.length;
                state.isLoading = false;
            })
            .addCase(getTotal.rejected, handleRejected)
    }
})

export const catalogReducer = catalogSlice.reducer;
export const { addToFavorites, removeFromFavorites } = catalogSlice.actions;
