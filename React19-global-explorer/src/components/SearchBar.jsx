import React, { useState } from 'react';

function SearchBar({setQueryProp}) {


  return (
   
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass" />
        <input className="" type="text" placeholder="Search for a Country" onChange={(e)=> setQueryProp(e.target.value.toLocaleLowerCase())}  />
      </div>
    </>
  );
}

export default SearchBar;
