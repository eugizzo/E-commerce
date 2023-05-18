import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from '../components/FetchUser'

const UserSlice = createSlice({
    name: 'users',
    initialState: {
        user: [],
        isLoading:false,
        error:null
    },
    reducers: {
        addUser(state,action){
            state.isLoading=true
            state.user=action.payload
        },
        removeUser(state,action){
            state.user.splice(action.payload,1)
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.isLoading=false
            
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.isLoading=true
            state.user=action.payload
          
        },
        [fetchUser.rejected]: (state, action) => {
            state.isLoading=false
            state.error=action.error
        }
    }
});
export const {addUser,removeUser}=UserSlice.actions
export const allUsers = (state) => state.users.user;
export default UserSlice.reducer;


