import React, { useEffect, useState } from 'react';
import { Category_List } from '../utils/Config';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItems();
    
  }, []);

  const getItems = async () => {
    try {
      const data = await fetch(Category_List);
      const jsonData = await data.json();
      setCategory(jsonData);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return <div className='text-center'>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className='flex flex-wrap justify-center my-5'>
       <h2 className="w-10/12 text-4xl text-start mb-5 my-5 italic text-yellow-900 font-semibold">Top Categories</h2>
      {category.map((item) => (
        
        <div key={item.id} className="max-w-[180px] mx-h-[180px] rounded-xl overflow-hidden shadow-lg mx-6 my-5">
          <img className="w-full bg-cover bg-center" src={item?.image} alt="Product" />
          <div className="px-6 py-4">
            <h1 className='text-2xl text-rose-900 font-semibold text-center'>{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
