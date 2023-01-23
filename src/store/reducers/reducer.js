import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import dreamSlice from './dreamsSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        dreams: dreamSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})