import React, { useState } from 'react';
//use
//component must be uppercase UseStateBasics
//cannot call conditionally
//must be in the function/component body
const UseStateBasics = () => {
   console.log(useState('hello world'));
   const value = useState(1)[0];
  const myhandler = useState(1)[1];
   console.log(value,myhandler);
   const [text,setText] = useState('random title');
  const handleClick = () =>{
    setText('hello world');
  if(text === 'random title'){
    setText('hello world');
  }else{
    setText('random title')
  }
    //  setText('random title');
   }
  
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>Change Title</button>
  </React.Fragment>
};

export default UseStateBasics;
