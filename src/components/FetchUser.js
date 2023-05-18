import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data; 
  } catch (error) {
    console.error('Error fetching user:', error);
    
  }
});

export { fetchUser };
