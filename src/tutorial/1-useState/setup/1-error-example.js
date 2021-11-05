import React from 'react';

const ErrorExample = () => {
  let title = 'random Title';
  const handleClick = () =>{
    title = 'hello people'
    console.log(title);
    
    // if(title = 'hello people'){
    //   title= 'Random Title';
    // }
    document.getElementById('h2').innerHTML=title;
  }
  return <React.Fragment>
    <h2 id='h2'> {title} </h2>
    <button type='button' className='btn' onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>
};

export default ErrorExample;
