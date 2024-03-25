import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosinstance } from "../../api";
import { limit } from "constants/vars";

export const getAllCatalog = createAsyncThunk(
    'catalog/getAll', async (page, thunkAPI) => {
        try {
            const { data } = await axiosinstance.get(`${ENDPOINTS.ADVERTS}?page=${page}&limit=${limit}`)
            console.log(data);
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

export const bookForm = createAsyncThunk('catalog/bookForm', async (data, thunkApi) => {
    try {
        await axiosinstance.post(ENDPOINTS.BOOK, data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
