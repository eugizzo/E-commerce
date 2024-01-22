import { addMovie,removeMovie} from '../reducer/movieSlice';
import './movieStyle.css'
import { useSelector, useDispatch } from 'react-redux';
import React,{useState} from 'react';

const MovieList = () => {
    const dispatch=useDispatch()
   const [addNewMovie,setAddNewMovie]=useState("")
   const [addYear,setAddYear]=useState("")
    const myMovie = useSelector((state) => state.movies.movies);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addMovie({ addNewMovie,addYear }));
      // setAddNewMovie('');
    };

    const deleteHandele=()=>{
      dispatch(removeMovie())
    }
  return (
    <div>





<div className="flex min-h-screen pt-4 justify-start bg-white">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium">Add Movies</h1>
 
    <form  className="mt-10" onSubmit={handleSubmit}>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text"   value={addNewMovie} onChange={(e) => setAddNewMovie(e.target.value)} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Movie name</label>
        </div>
        <div className="relative z-0">
          <input type="text"   value={addYear}
          onChange={(e) => setAddYear(e.target.value)} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Year</label>
        </div>
        
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Add</button>
    </form>
   

    <div className="h-full flex flex-col  pt-8 min-h-screen ">
      {/* Table */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Customers</h2>
        </header>
        <search>hello eugene</search>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">movi name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">year</div>
                </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">year</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
      {myMovie.map((list)=>(

                <tr key={list.id}>
                 
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{list.addNewMovie}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">{list.addYear}</div>
                  </td>
                  <button type='submit' className="bg-red-600 p-2 py-1 rounded-xl text-white" onClick={deleteHandele}> Delete</button>
                </tr>
            ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  </div>
  

</div>

    </div>
  )
}

export default MovieList
