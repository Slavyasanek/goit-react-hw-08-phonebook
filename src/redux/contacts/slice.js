import { createSlice } from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        isLoading: false,
        error: null,
        items: [],
    }
})

export const contactsReducer = contactsSlice.reducer;