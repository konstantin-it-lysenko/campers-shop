import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosinstance } from "../../api";
import { limit } from "constants/vars";

export const getAllCatalog = createAsyncThunk(
    'catalog/getAll', async (page, thunkAPI) => {
        try {
            const { data } = await axiosinstance.get(`${ENDPOINTS.ADVERTS}?page=${page}&limit=${limit}`)

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getTotal = createAsyncThunk(
    'catalog/getTotal', async (_, thunkAPI) => {
        try {
            const { data } = await axiosinstance.get(ENDPOINTS.ADVERTS)

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const bookForm = createAsyncThunk('catalog/bookForm', async (data, thunkAPI) => {
    try {
        await axiosinstance.post(ENDPOINTS.BOOK, data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const filterCatalog = createAsyncThunk('catalog/filter', async (data, thunkAPI) => {
    try {

    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
