import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/CartSlice';

const Suggestion = () => {

    const [suggestion, setSuggestion] = useState([]);
    const dispatch=useDispatch();

    useEffect(() => {
      getSuggestionProducts()
    }, [])

    const getSuggestionProducts = async ()=>{
        const data= await fetch("https://api.escuelajs.co/api/v1/categories");
        const json= await data.json();
        setSuggestion(json)
        console.log(json);
    }

    const addFooditem=(i)=>{
      dispatch(addItem(i));
    };
    
  return (
    <div>
        <h1 className='text-center text-3xl font-bold '>Suggestion</h1>
        {suggestion.map((i,id)=>{
            return(
              <div key={id} className="max-w-sm w-full lg:max-w-[70%]  lg:flex mx-40 my-5 shadow-lg border border-black">
              <div className="h-48 lg:h-[150px] lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img className='h-48 lg:h-full lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"' src={i.image}/>
              </div>
              <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">{i.title}</div>
                  <div className="text-gray-900 font-bold text-base mb-2">{i?.name}</div>
                  
                </div>
                <div className="flex items-center ">
                  <div className="text-sm flex">
                    <p className="text-gray-900 leading-none text-2xl mx-2 -mt-10"><span className='text-3xl text-green-800 font-bold'>$</span>20</p>
                    <button className='mx-10 w-[80px] h-[40px] -mt-20 bg-green-600 rounded-lg hover:bg-green-950 text-white lg:ml-96'
                    onClick={()=>addFooditem(i)}
                    >Add Item</button>
                     <FaHeart className='text-yellow-800 hover:text-red-800 -mt-[4.5rem] text-2xl'/>

                  </div>
                </div>
              </div>
            </div>
            );
        })}


    </div>
  )
}

export default Suggestion