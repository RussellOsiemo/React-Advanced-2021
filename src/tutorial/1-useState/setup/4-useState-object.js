import React, { useState } from 'react';

const UseStateObject = () => {
  const [person ,setPerson]=useState({name:'Gayla',
  age:24,
  message:'Im a teacher'}  );

  const [name,setName] =useState('Gayla');
  const [age,setAge] =useState(19);
  const [message,setMessage] =useState('Im a teacher');
const changeMessage = ()=>{
// setPerson({...person, message:'Hello World'});
setMessage('Hello World');

};
  return (
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
