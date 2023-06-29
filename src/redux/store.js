import { configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const middleware = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
})

export const persistor = persistStore(store);