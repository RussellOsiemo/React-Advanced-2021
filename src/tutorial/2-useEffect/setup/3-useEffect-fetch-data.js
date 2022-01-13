import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
  const [uses, setUsers] = useState([]);
  const getUsers = async()=>{
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUsers(users)
  }
  useEffect(()=>{
   getUsers();
  },[]);
  return <>
     <h2>GitHub Users</h2>;
     <ul className="users">
       {users
       .map((user)=>{
         const {id,login,avata_url,html_url} =url;
         return <li key = {id}>
           <img src= {avata_url} alt={login} />
         </li>
       })}
       </ul> 
  </>
};

export default UseEffectSecondArgument;
