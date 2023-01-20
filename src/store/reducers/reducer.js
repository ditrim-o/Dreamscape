import { configureStore } from '@reduxjs/toolkit'
import dreamSlice from './dreamsSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: dreamSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})