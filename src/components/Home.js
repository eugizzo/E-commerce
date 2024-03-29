import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addSong, getAllSong } from '../reducer/reducerCount';
import { addCart } from '../reducer/cartSlice';
import './stylea.css'
// import { incrementCounter, decrementCounter } from '../action/Action'
import axios from 'axios'
const Home = () => {
  const [loading, setLoading] = useState(true);
  const count = useSelector(getAllSong);
  const cartCount = useSelector(state=>state.cart);

  const dispatch = useDispatch();

const fetctProduct= async ()=>{
 const response = await axios.get('https://fakestoreapi.com/products')
 .then((response)=>{
  console.log(response.data)
  dispatch(addSong(response.data))
  setLoading(false);
  console.log(cartCount)
 })
 .catch((error)=>{
  console.log(error)
 })
  

 }

 useEffect(()=>{
  fetctProduct()
 },[])

const addCartHandle=(mySong)=>{
  dispatch(addCart(mySong))
}

  return (
  <div className="product-list bg-gray-800">
  {loading ? (
    <p className=' text-white'>Loading...</p>
  ) : (
    <div className="card-container">
      {count.map((mySong) => (
        <div key={mySong.id} className="card">
        <img src={mySong.image} alt={mySong.title} className=''/>
          <p className='text-white-500 pt-2'>{mySong.title}</p>
          <p className='text-blue-500'>Price: ${mySong.price}</p>
          <div className='flex'>
          <button className='bg-white p-2 mt-3 w-40 rounded-xl text-black' onClick={()=>addCartHandle(mySong)}>Add Cart</button>
         
          </div>
          </div>
      ))}
      <div>
      hjkl0u8
      </div>
    </div>
    
  )}
</div>
 )    
};

export default Home;