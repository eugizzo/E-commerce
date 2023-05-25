
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  songs:[],
}
const songSlice=createSlice({
  name:'songs',
  initialState,
  reducers:{
  addSong:(state,{ payload})=>{
    state.songs=payload
  },
  removeSong:(state,action)=>{
 const removeItem = action.payload;
 state.songs=state.songs.filter((item)=>item.id !==removeItem)
    // state.songs.splice(payload,1);
  }
}
})

export const {addSong,removeSong} =songSlice.actions;
export const getAllSong=(state) => state.songs.songs
export default songSlice.reducer
