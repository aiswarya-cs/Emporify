import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";



const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity=()=>{
        setQuantity(quantity+1);

    }

    const decreaseQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }



    return (
      <div className="flex lg:max-w-[40%] border border-slate-300 lg:mx-[30%]">
        <div className="flex items-center">
          <img src={item?.category?.image} alt={item?.category?.name} className="w-54  h-56 mr-4 bg-no-repeat bg-cover" />
          <div className='mb-24'>
          <p className="text-yellow-900 font-bold text-xl">{item.title}</p>
            <p className=" text-yellow-900 font-bold text-xl">{item?.category?.name}</p>
            <p className="text-gray-600 lg:mt-4"><span className='text-2xl text-green-800 font-bold'>$</span>{item.price}</p>
            <div className='absolute py-8 flex'>
             <button className='w-7 bg-gray-300 h-7 rounded-full'
             onClick={increaseQuantity}
             ><BsPlus className='mx-[0.4rem]'/></button>
             <h3 className='mx-2 text-rose-900 text-xl font-bold'>{quantity}</h3>
            <button className='w-7 bg-gray-300 h-7 rounded-full
            '
            onClick={decreaseQuantity}
            ><HiOutlineMinusSm className='mx-[0.4rem]'/></button>
            </div>
          </div>
          
        </div>
        
      </div>
    );
  };

const Cart = ({setHideandshow}) => {
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);

    useEffect(()=>{
            setHideandshow(false);
        return () => {
            setHideandshow(true);
        }
    },[setHideandshow])
  return (
    <div>
      <div className="font-bold text-3xl text-center my-8">Shopping Cart {cartItems.length}</div>
      <div className="mt-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Cart
