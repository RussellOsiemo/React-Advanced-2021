import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  //remove item with matching id
  const removeItem =(id)=>{
    //the arrow function prevents functions from runnning on load
   let newPeople = people.filter((person)=>person.id !== id)
   setPeople(newPeople);
  }
  return (<>
  
  {people.map((person) =>{
const {id,name} =person;
return (
<div key={id} className='item'>
    <h4>{name}</h4>
    <button onClick={()=>removeItem(id)}>Remove</button>
</div>)
  })}
  {/* the button calls the setPeople function  and remoce all items*/}
  <button className='btn' onClick={()=>setPeople([])}>Clear Items</button>
  </>);
};

export default UseStateArray;
 