import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/dog/dogSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // added for cache 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
});