import React, { useEffect, useState } from 'react';
import { All_Products } from '../utils/Config';
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom'; 


function filterData(search, menuItems) {
  return menuItems.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
}
const ProductsList = ({setHideandshow}) => {
  const [search,setSearch]=useState()
  const [products, setProducts] = useState([]);
  const [filteritems,setFilterItems]=useState([]);

  useEffect(() => {
    getVideos();
    setHideandshow(false);
        return () => {
            setHideandshow(true);
        }
  }, [setHideandshow]);

  const getVideos = async () => {
    const data = await fetch(All_Products);
    const json = await data.json();
    setProducts(json);
    setFilterItems(json);
    console.log(json);
  }

  return (
    <>
    <h2 className="text-6xl ml-36 text-gray-400 mb-10 my-5 italic text-left font-extrabold">Search.....</h2>
   <div className='my-5'>
   <input
          className='w-[500px] h-[50px] border border-gray-400 p-2  focus:border-blue-800 items-center ml-72 rounded-lg'
          type='text'
          placeholder=' Type here..'
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value);
           }}

        />
        <button className='text-white border-gray-400 p-2 rounded-lg w-[200px] h-[50px] bg-yellow-800 border-0 ml-4  -mt-2 hover:bg-red-900'
          onClick={()=>{
            const data=filterData(search,products);
            setFilterItems(data)
           }}
        >
          Search
        </button>
   </div>
    
    <div className="flex flex-wrap justify-center">
    {filteritems.length === 0 ? (
          <p className="text-center text-red-600 text-xl">Wait.....</p>
        ) : (
      filteritems.map((item, id) => (
        <div key={id} className="max-w-xs mx-h-[280px] rounded overflow-hidden shadow-lg mx-4 my-5">
           <Link to={`/products/${item.category.name}/${item.id}`} products={products}> {/* Link to detailed page */}
            <img className="w-full" src={item?.category?.image} alt="Product" />
            <div className="px-6 py-4">
              <h1 className='text-2xl text-rose-900 font-semibold'>{item.category.name}-<span className='text-lg'>{item.title}</span></h1>
              <span className='flex'>
                <p className="text-gray-700 text-xl"><span className='text-2xl text-green-900 font-bold'>$</span>{item.price}</p>
                <p>
                  <IoIosHeartEmpty className='mx-3 my-2 text-2xl ml-52 hover:bg-red-800 rounded-full cursor-pointer'/>
                </p>
              </span>
            </div>
          </Link>
        </div>
      ))
      )}
    </div>
    </>
  );
};

export default ProductsList;
