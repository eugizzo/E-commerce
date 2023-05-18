import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies:[],
  }
const movieSlice =createSlice({
    name:'movie',
   initialState,
   reducers:{
    addMovie(state,action){
        state.movies.push(action.payload)
    },
    removeMovie(state,actions){
        state.movies.splice(actions.payload,1);
    }
   }
})

export const {addMovie,removeMovie} = movieSlice.actions
export default movieSlice.reducer
