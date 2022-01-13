import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text,setText] =useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
console.log(secondValue);
  return <>
  {/* <h1>{firstValue}</h1>
  <h1>Value :{secondValue}</h1> */}
  <h1>{text || 'Russ'}</h1>
  {text && <h1>Hello World</h1>}
  </>;
};

export default ShortCircuit;
