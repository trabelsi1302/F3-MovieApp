import React, {useState} from 'react';
const SearchBarss = ({ setSearchName , setSearchDate , setsearchrating }) => {
 const changeInput=(event)=>{
   setSearchName(event.target.value)
   
   setSearchDate(event.target.value)
 }
  return (
    <div>
      <input onChange={changeInput }  />
     
    </div>
  );
};
export default SearchBarss;

