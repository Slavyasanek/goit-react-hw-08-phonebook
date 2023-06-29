import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        isLoading: false,
        error: null,
        items: [],
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(addContact.pending, handlePending)
        .addCase(deleteContact.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.error = null;
        })
        .addCase(fetchContacts.rejected, handleError)
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        })
        .addCase(addContact.rejected, handleError)
        .addCase(deleteContact.fulfilled, (state, action) =>  {
            state.isLoading = false;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, handleError)
    }
})

export const contactsReducer = contactsSlice.reducer;