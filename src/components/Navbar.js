import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addCart,removeCart,getAllCart } from '../reducer/cartSlice';
const Navbar = () => {

    const [isOpen,setIsOpen]=useState(false)

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
      };

      const cartCount = useSelector(getAllCart);
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button onClick={handleToggleOpen} className="flex items-center px-3 py-2 border-3 rounded text-black border-gray-500  hover:border-[#05C605] hover:text-[#05C605]">
            {isOpen && (<svg className="fill-current texiblue-300 h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>

            )}
            {!isOpen && (
              <svg className="fill-current texiblue-300 h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            )}
          </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" >
            <div className="flex flex-shrink-0 items-center">
         
            </div>
            <div className= "lg:flex sm:ml-6 hidden">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">product</Link>
                <Link to='/movie' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Movie</Link>
                <Link to="/users" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Users </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div class=" text-white pr-4 flex justify-center items-center">
          <div class="relative py-2">
        <div class="t-0 absolute left-3">
          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartCount.lenght}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>
      </div>


            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button onClick={handleToggleOpen} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                </button>
              </div>
     
              <div className={`${isOpen? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " :"hidden"}` } role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                {/* Active: "bg-gray-100", Not Active: "" */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className= {`lg:flex sm:ml-6 lg:hidden ${isOpen ? "sm:block " : "hidden"} `} id="mobile-menu" >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <Link to='/'  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">product</Link>
          <Link to='/movie' className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Movies</Link>
          <Link to="/users" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Users</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
