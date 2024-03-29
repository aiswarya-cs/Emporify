import React from 'react'
import { Button, message, Space } from 'antd';
import { addItem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';


const CartAdded = () => {
  const dispatch=useDispatch(); 

    const [messageApi, contextHolder] = message.useMessage();
  // const handleCLicked = () => {
  //   messageApi.open({
  //     type: 'success',
  //     content: 'Item Added',
  //   });
  // };

  const handleAddItem=()=>{
    dispatch(addItem("garpses")); // dispatch action payload
  }
  return (
    <div>
         {contextHolder}
         <Space>
        <button className='mx-10 w-[80px] h-[40px] -mt-2 bg-green-600 rounded-lg hover:bg-green-950 text-white' 
        // onClick={handleCLicked}
        onClick={()=>handleAddItem}
        >Add Item</button>
        </Space>
    </div>
  )
}

export default CartAdded