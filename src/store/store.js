import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../reducer/reducerCount'

// Create the Redux store
const store = configureStore({
    reducer: {
        songs: songReducer
    }
});

export { store }