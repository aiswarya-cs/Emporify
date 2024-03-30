import React, { useEffect, useState } from 'react';
import { Users } from '../utils/Config';

const UserList = ({setHideandshow}) => {

  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    getuserList();
    setHideandshow(false);
    return () => {
      setHideandshow(true);
    }
  }, [setHideandshow])
  
  
  const getuserList = async () => {
    const data = await fetch(Users);
    const json = await data.json();
    setUserlist(json);
    console.log(json);
  }
  
  return (
    <div className='w-[90%] lg:h-auto my-5 mx-10 items-center'>
      <table className="table-auto border border-1 w-full">
        <thead className="border border-1">
          <tr>
            <th className="border border-1 ">Avatar</th>
            <th className="border border-1">Name</th>
            <th className="border border-1">Email</th>
            <th className="border border-1">Role</th>
          </tr>
        </thead>
        {userlist.map((list,id)=>{
          return(
            <tbody>
          <tr className="border border-1">
            <td className="border border-1 w-20 h-20">{list.avatar}</td>
            <td className="border border-1">{list.name}</td>
            <td className="border border-1">{list.email}</td>
            <td className="border border-1">{list.role}</td>
          </tr>
          
        </tbody>
          )
        })}
        
      </table>
    </div>
  )
}

export default UserList;
