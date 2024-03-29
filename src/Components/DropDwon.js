import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Link
        href="#"
        onClick={toggleDropdown}
        className="block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold text-red-700 hover:text-black mr-4"
      >
    Categories</Link>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
          <Link href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Clothes</Link>
          <Link href="#" className="block px-4 py-2 texttext-base text-gray-700 hover:bg-gray-100">Electronics</Link>
          <Link href="#" className="block px-4 py-2 texttext-base text-gray-700 hover:bg-gray-100">Furniture</Link>
          <Link href="#" className="block px-4 py-2 texttext-base text-gray-700 hover:bg-gray-100">Shoes</Link>
          <Link href="#" className="block px-4 py-2 texttext-base text-gray-700 hover:bg-gray-100">Vehicles</Link>
          <Link href="#" className="block px-4 py-2 texttext-base text-gray-700 hover:bg-gray-100">Birds</Link>
         
        </div>
      )}
    </div>
  );
};

export default DropDown;
