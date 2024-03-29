import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../utils/CartSlice';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { All_Products } from '../utils/Config';
 import { addItem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';
import Suggestion from './Suggestion';

const DetailedPage = ({setHideandshow}) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null); 
    const dispatch=useDispatch();
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`${All_Products}/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const productData = await response.json();
                setProduct(productData);
                console.log(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
           };
       fetchProductDetails();
    }, []);
    useEffect(() => {
        setHideandshow(false);
        return () => {
            setHideandshow(true);
        }
    }, [setHideandshow])
    
    if (product === null) {
        return <div>Loading...</div>;
    }

    const handleAddItem=(product)=>{
      dispatch(addItem(product));
    }

    return (
      <>
    <div className="max-w-sm w-full lg:max-w-[70%]  lg:flex mx-40 my-20 shadow-2xl">
  <div className="h-48 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
    <img className='h-48 lg:h-full lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"' src={product?.category?.image}/>
  </div>
  <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">{product?.title}</div>
      <div className="text-gray-900 font-bold text-base mb-2">{product?.category?.name}</div>
      <p className="text-gray-700 text-base">{product?.description}</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm flex justify-between">
        <p className="text-gray-900 leading-none text-2xl mx-5 -mt-2"><span className='text-3xl text-green-800 font-bold'>$</span>{product?.price}</p>
        <button className='mx-10 w-[80px] h-[40px] -mt-2 bg-green-600 rounded-lg hover:bg-green-950 text-white' 
        // onClick={handleCLicked}
        onClick={()=>handleAddItem(product)}
        >Add Item</button>
      </div>
    </div>
  </div>
</div>

      <Suggestion />
</>
  
    );
}

export default DetailedPage;
