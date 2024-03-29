import React, { useEffect, useState } from 'react'
import { All_category } from '../utils/Config'

const Category = ({setHideandshow}) => {

  const [categoryItems, setCategoryItems] = useState([])
    useEffect(() => {
        getItems();
        setHideandshow(false);
        return () => {
          setHideandshow(true);
        }
      }, [setHideandshow]);
    
      const getItems = async () =>{
        const data= await fetch(All_category);
        const json=await data.json();
        console.log(json);
        setCategoryItems(json);
      }
  return (
    <div className='flex flex-wrap justify-center my-5'>
      {categoryItems.map((item) => (

        <div key={item.id} className="max-w-[150px] mx-h-[150px] rounded-lg overflow-hidden shadow-lg mx-4 my-5">
          <img className="w-full bg-cover bg-center" src={item?.category.image} alt="Product" />
          
          {/* <div className="px-6 py-4">
            
          </div> */}
          <h1 className='text-2xl text-rose-900 font-semibold text-center'>{item?.category.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Category;