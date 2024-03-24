import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosinstance } from "../../api";

export const getAllCatalog = createAsyncThunk(
    'catalog/getAll', async (_, thunkAPI) => {
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
