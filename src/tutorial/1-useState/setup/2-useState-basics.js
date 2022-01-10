import React, { useState } from 'react';
//use
//component must be uppercase UseStateBasics
//cannot call conditionally
//must be in the function/component body
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // // first item from the useState Array 
  // const value = useState(1)[0];
  // // second item from the useState Array 
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text,setText] = useState('Random Title');
  //the new value to be rendered
  const handleClick = () =>{
    if (text === 'Random Title') {
      
    
    setText('Hello World');
    } else{
      setText('Random Title')
    }
  };

  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick = {handleClick}>Change Title</button>
  </React.Fragment>
};

export default UseStateBasics;
