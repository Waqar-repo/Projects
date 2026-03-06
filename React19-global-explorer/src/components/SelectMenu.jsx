import React from 'react';

function SelectMenu({setRegion}) {
  return (
    <select name="searchContainer" id="" className="filter-by-region" onChange={(e)=> setRegion(e.target.value)}>
      <option value="" hidden="">
        Filter By Region
      </option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="America">
        America
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
    </select>
  );
}

export default SelectMenu;
