import React from 'react'
import AboutUs from './AboutUs'

export default function Header({setQuery}) {

  return (
   <>
   <div className="headerContent">
        <h1 className='Moto'>The Book Haven</h1>
  
    <form action="">
 
    <div className="searchContent">
    <input for type="text" placeholder='Search a Book' htmlFor='book' onChange={(e)=> 
      setQuery(e.target.value.toLowerCase()) 
      } />
   
    </div>
    </form>

<AboutUs />
   </div>
   </>
  )
}
