import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts as fetchAll, addContact as addSingle, deleteContact as deleteSingle } from "api/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            return fetchAll();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.messgae);
        }
    })

export const addContact = createAsyncThunk('contacts/addContact',
    async (text, thunkAPI) => {
        try {
            return addSingle(text)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            return deleteSingle(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);