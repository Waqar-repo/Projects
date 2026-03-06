import React, { use } from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesContainer from './CountriesContainer';
import { useState } from 'react';
export default function Home() {
  const [query,setQuery] = useState('')
  const [region,setRegion] = useState('')
  return (
       <main>
        <div className="search-filter-container">
          <SearchBar setQueryProp={setQuery}/>
          <SelectMenu setRegion={setRegion}/>
        </div>
       {query === 'unmount' ? '' :<CountriesContainer queryProp={query} region={region}/>}
      </main>
  )
}
