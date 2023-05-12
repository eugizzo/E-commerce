import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllSong } from '../reducer/reducerCount';
// import { incrementCounter, decrementCounter } from '../action/Action'

const Home = () => {
  const count = useSelector(getAllSong);
  console.log(count)
  // const dispatch = useDispatch();

console.log(count)
  return (
    <div>
      {
        count.map((mySong)=>{
          return(
          <div key={mySong.id}>   
          <h1>{mySong.songs}</h1>
          </div>)
        }) 
      }
    </div>
  );
};

export default Home;