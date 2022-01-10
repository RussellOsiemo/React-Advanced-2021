import React, { useState } from 'react';
//object
const UseStateObject = () => {
 const [person, setPerson] = useState({name:'Russel',
  age:20,
  message: 'Random Message',});
// no longer dealing with an object
const [name, setName] = useState('Russel');
const[age, setAge]= useState(20);
const [message, setMessage] =useState('Random Message');
 
  const changeMessage =() =>{
    //spread operator to indicate that everything reamins the same except message
    // setPerson({...person ,message : 'Hello World'})
    setMessage('Hello World');
  }
return <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick = {changeMessage}>Change Message</button>
   </>
};

export default UseStateObject;
