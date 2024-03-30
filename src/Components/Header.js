import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import DropDown from './DropDwon';


const Header = () => {
   const cartItems= useSelector( store=>store.cart.items);
   console.log(cartItems);

   

  return (
    <div>
<nav className="flex items-center justify-between flex-wrap bg-slate-50 p-3 shadow-lg lg:max-h-[120px]">
  <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
    <span className="font-bold text-2xl tracking-tight text-slate-800 pl-40 font-serif italic">Emporify</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
    <div className="text-sm lg:flex-grow lg:mx-56 lg:my-1">
    
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold text-red-700 hover:text-black mr-4">
       Home
      </Link>
      <Link to="" className="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold text-red-700 hover:text-black mr-4">
        <DropDown/>
      </Link>
     
      <Link to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold text-red-700 hover:text-black">Products
      </Link>
      
      <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold text-red-700 hover:text-black mx-3">
        Users
      </Link>
      <Link to="/cart" className="block mt-4 lg:inline-block ml-44 lg:mt-0 text-lg font-semibold text-red-700 hover:text-black">
      <span className='flex mt-1'><FaCartShopping className='mx-1 mt-1'/>{cartItems.length}</span>
      </Link>


    </div>
  </div>
</nav>

    </div>
    )
}
export default Header;