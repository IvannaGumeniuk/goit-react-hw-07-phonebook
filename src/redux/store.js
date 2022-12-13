import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterReducer, entities, error, isLoading } from './reducers';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        entities,
        error,
        isLoading,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

