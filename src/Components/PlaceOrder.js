import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdLocalShipping } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";
import { clearCart } from '../utils/CartSlice';


const PlaceOrder = ({ setHideandshow }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    //const dispatch = useDispatch();
    const navigate=useNavigate()

    // Fetching cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    // Constants for shipping charge and tax
    const shippingCharge = 5;
    const tax = 6;
    const totalAmount = subtotal + shippingCharge + tax;

   useEffect(() => {
        setHideandshow(false);
        return () => {
            setHideandshow(true);
        };
    }, [setHideandshow]);

   
    const handleConfirmOrder = () => {
    
      
  };
    return (
      
        <div>
          
            <div className="font-bold text-3xl text-center my-8">Confirm Order</div>
                
                {/* list */}
                <div className="text-left mb-8 w-full mx-28">
              <h2 className="text-xl font-bold mb-2">Order Details</h2>
              <div className='lg:flex lg:max-w-[80%] h-[.15em] my-2 bg-gray-300 mb-4 '/>
              <ul>
                {cartItems.map((item, index) => (
                <div key={index} className='lg:flex lg:max-w-[80%] h-auto bg-gray-100 mb-4 shadow-lg'>
                <div className="lg:w-1/3 ">
                    <img src={item?.category?.image} alt={item.title} className="h-96 w-full object-cover shadow-2xl rounded-lg my-2 mx-1" />
                </div>
                <div className="lg:w-2/3 p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <h3 className="text-lg font-bold mb-2">{item?.category?.name}</h3>
                    <p className="text-base text-gray-600"><span className='text-lg text-green-700 font-bold'>$</span>{item.price}.00</p>
                    <p className="text-sm text-gray-600">A foreboding archway leads outside. Heavy rains descend upon the earth. Your destiny awaits. Hold up, are we still talking about t-shirts?</p>

                    {/* delivery address */}
                    <div className='flex flex-col lg:flex-row justify-between lg:my-7'>
                    <div class="lg:w-1/2">
                          <h1 className='font-semibold text-xl'>Delivery Address</h1>
                          <p className='py-2 text-gray-700'>Floyd Miles <br/>7363 Cynthia Pass<br/>Toronto, ON N3Y 4H8</p>
                          
                      </div>
                      <div class="lg:w-1/2">
                          <h1 className='font-semibold text-xl'>Shipping Updates</h1>
                          <p className='py-2 text-gray-700'>S•••@example.com</p>
                          <p className='py-2 text-gray-700'>1•••••••••40</p>
                      </div>
                      
                    </div>
                    <div className='my-3'>
                        <h3>Shipping Date On March 3 </h3>
                      </div>
                          </div>
                      </div>
                  ))}
              </ul>
          </div>

          
           {/* payment */}
           
           <div className='lg:flex lg:max-w-[80%] h-auto bg-gray-100 mb-4 shadow-lg mx-28'>
              <div className="lg:w-1/3 mx-5">
                <h1 className='my-5 yext-lg font-bold'>Payment Method</h1>
              <div className="mb-4 flex">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="credit_card"
                    checked={paymentMethod === "credit_card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                />
                <label htmlFor="credit_card">Credit Card </label><RiBankCardFill />

            </div>
            <div className="mb-4 flex">
                <input
                    type="radio"
                    
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                />
                <label htmlFor="paypal">PayPal </label><FaCcPaypal />
            </div>
            <div className="mb-4 flex ">
                <input
                    type="radio"
                  
                    name="paymentMethod"
                    value="cash_on_delivery"
                    checked={paymentMethod === "cash_on_delivery"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                />
                <label className='flex'>Cash on Delivery </label><MdLocalShipping />
            </div>
          </div>
          <div className="lg:w-2/3 ">
    {/* Total Amount */}
                <div className="mx-28 w-full py-2">
                  {/*  */}
                    <p className="text-lg font-bold mb-2 text-gray-600">Subtotal<span className='text-black lg:mx-[17.7rem]'> ${subtotal}</span></p>
                    
                    <div className='lg:w-[80%] h-[.10em] my-2 bg-slate-200'/>
                    {/*  */}
                    <p className="text-lg font-bold mb-2 text-gray-600">Shipping Charge <span className='text-black lg:mx-[13.5rem]'>${shippingCharge}</span></p>
                    <div className='lg:w-[80%] h-[.10em] my-2 bg-slate-200'/>
                    {/*  */}
                    <p className="text-lg font-bold mb-2 text-gray-600">Tax  <span className='text-black lg:mx-[20.7rem]'>${tax}</span></p>
                    <div className='lg:w-[80%] h-[.10em] my-2 bg-slate-200'/>
                    {/*  */}
                    <p className="text-lg font-bold mb-4">Total <span className='text-yellow-800 lg:mx-[20rem]'> ${totalAmount} </span></p>
                </div>
            </div>
           </div>
          
                  
               <div className='flex lg:flex  lg:mx-[300px]'>
              
                {/* Back to Cart Button */}
                <Link to="/cart">
                    <button className="bg-gray-600 w-80 h-10 rounded-lg text-white text-xl">
                        Back to Cart
                    </button>
                </Link>
                <Link to="/orderconfirm">
                <button
                    // onClick={handleConfirmOrder}
                    className="bg-green-800 w-80 h-10 rounded-lg text-white text-xl mb-4"
                >
                    Place Order
                </button>
                </Link>
            </div>
            
            </div>
           
        
    );
};

export default PlaceOrder;
