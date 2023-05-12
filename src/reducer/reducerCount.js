
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs:[
    {id:1,
    songs:'harry'
  },
  {id:2,
    songs:'one love'
  }
  ],
}
const songSlice=createSlice({
  name:'songs',
  initialState,
  reducers:{
  addSong:(state,{ payload})=>{
    state.songs=payload
  },
  removeSong:(state,{ payload})=>{

    state.songs.splice(payload,1);
  }
}
})

export const {addSong,removeSong} =songSlice.actions;
export const getAllSong=(state) => state.songs.songs
export default songSlice.reducer