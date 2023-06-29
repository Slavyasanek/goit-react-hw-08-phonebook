import { createSlice } from "@reduxjs/toolkit"
import { UserLogIn, UserLogOut, UserRefresh, UserSignUp } from "./operations"

const userInitiaLState = {
    name: null,
    email: null
}

const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleUnlogged = (state, action) => {
    state.user = userInitiaLState;
    state.isLoggedIn = false;
    state.token = null;
    state.isRefreshing = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: userInitiaLState,
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
        .addCase(UserSignUp.fulfilled, handleFulfilled)
        .addCase(UserLogIn.fulfilled, handleFulfilled)
        .addCase(UserLogOut.fulfilled, handleUnlogged)
        .addCase(UserRefresh.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(UserRefresh.fulfilled, handleFulfilled)
        .addCase(UserRefresh.rejected, handleUnlogged)
    }
})

export const authReducer = authSlice.reducer;