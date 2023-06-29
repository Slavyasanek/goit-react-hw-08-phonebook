import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, refreshMe } from "api/auth";
import { setToken } from "api/instance";

export const UserSignUp = createAsyncThunk('auth/signin',
    async (credentials, thunkAPI) => {
        try {
            return await signUp(credentials);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const UserLogIn = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
        try {
            return await logIn(credentials);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const UserLogOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
        try {
            return logOut();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const UserRefresh = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (token === null) {
            return thunkAPI.rejectWithValue('user is undefined');
        }
        try {
            setToken(token);
            return refreshMe();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })
