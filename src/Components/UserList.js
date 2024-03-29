import React, { useEffect, useState } from 'react';
import { Users } from '../utils/Config';

const UserList = () => {

  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    getuserList()
  }, []);
  
  const getuserList = async () => {
    const data = await fetch(Users);
    const json = await data.json();
    setUserlist(json);
    console.log(json);
  }
  
  return (
    <div>
      <h1>Our Customers</h1>
      
    </div>
  )
}

export default UserList