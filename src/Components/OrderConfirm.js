import React, { useEffect } from 'react'

const OrderConfirm = ( {setHideandshow}) => {
    useEffect(() => {
        setHideandshow(false);
        return () => {
            setHideandshow(true);
        };
    }, [setHideandshow]);

  return (
    <div className='w-full h-[600px] bg-green-900'>
        <h1 className='text-center py-[300px] text-white text-4xl'>SUCCESSFULL PLACED</h1>
    </div>
  )
}

export default OrderConfirm