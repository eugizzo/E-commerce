import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../reducer/reducerCount'
import movieReducer from '../reducer/movieSlice';
import cartreducer from '../reducer/cartSlice';
import userReducer  from '../reducer/userSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        songs: songReducer,
        movies:movieReducer,
        cart:cartreducer,
        users:userReducer,
    }
});

export { store }
export * from "../components/FetchUser"