import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading , setLoading] = useState(true);
  const[isError, useisError] =useState(false)



  if(loading){
    return  <h2>loading....</h2>
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
