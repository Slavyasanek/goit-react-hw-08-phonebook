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
    state.isError = false;
}

const handleUnlogged = state => {
    state.user = userInitiaLState;
    state.isLoggedIn = false;
    state.token = null;
    state.isRefreshing = false;
}

const handleRejected = state => {
    state.isError = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: userInitiaLState,
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isError: false,
    },
    reducers: {
        setIsError: (state) =>  {
            state.isError = false;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(UserSignUp.fulfilled, handleFulfilled)
        .addCase(UserSignUp.rejected, handleRejected)
        .addCase(UserLogIn.fulfilled, handleFulfilled)
        .addCase(UserLogIn.rejected, handleRejected)
        .addCase(UserLogOut.fulfilled, handleUnlogged)
        .addCase(UserRefresh.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(UserRefresh.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(UserRefresh.rejected, handleUnlogged)
    }
})

export const {setIsError} = authSlice.actions;
export const authReducer = authSlice.reducer;