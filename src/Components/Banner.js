import React from 'react'
import Shop from "../assets/shop1.jpg";
import Shop1 from "../assets/shop3.jpg"
import Shop2 from "../assets/shop2.jpg"

import { LiaOpencart } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Banner = () => {
  return (
    <div className='flex   bg-gradient-to-r from-gray-300  lg:h-[500px]'>
      <div className='flex-1 max-w-[50%] py-10 lg:h-[500px]'>
     
        <h1 className='text-6xl font-bold text-amber-900 text-center my-5'>BIG SALE</h1>
        <p className='text-lg text-center my-5 italic'>
        All Products Shope now.
        </p>
        <p className='text-center text-base my-5 text-gray-800'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since , when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <button className='flex w-96 h-12 bg-red-700 rounded-r-full text-white text-2xl italic pl-28 py-1'>EXPLORE NOW <LiaOpencart className='mx-3'/></button>
        <p className='tracking-[.50em] text-center mt-10 text-amber-800'>www.empporify.com</p>
        <ul className='flex justify-center items-center mt-10'>
            <li className='mx-5 text-xl text-amber-800'><LiaFacebookF /></li>
            <li className='mx-5 text-xl text-amber-800'><FaInstagram /></li>
            <li className='mx-5 text-xl text-amber-800'><FaTwitter /></li>
            <li className='mx-5 text-xl text-amber-800'> <IoLogoWhatsapp /></li>
        </ul>
        </div>
        

       {/* right side */}
      <div className='flex-1 max-w-[50%] mr-10'>
      <div className='w-56 h-12 bg-yellow-700 ml-0 rounded-l-full my-2 lg:ml-[72%]'>
            <h1 className='text-white text-2xl text-center py-1 font-mono'>SPECIAL OFFERS</h1>    
        </div>
        
        <div className='flex justify-center'>
        <img src={Shop} alt='Shop' className='lg:ml-[30%] mt-10 w-[200px] h-[200px] rounded-3xl' />
        <img src={Shop2} alt='Shop' className='w-[200px] h-[200px]  rounded-3xl mx-1' />
        </div>
        <img src={Shop1} alt='Shop' className='w-[200px] h-[200px]  rounded-3xl lg:ml-[65%] -mt-9'/>
        <div className='w-40 h-40 border border-dashed border-2 border-yellow-900 -mt-44  rounded-full'>
            <h1 className='text-5xl text-center py-8 font-semibold text-amber-700'>20% <br/>OFF</h1>
        </div>
      </div>
    
    </div>
  )
}

export default Banner