import React from 'react'
import { Link } from 'react-router'

export default function BackButton() {
  return (
   <>
   <Link to='/'>
   <button className='BackButton'>Back</button>
   </Link>
   {/* <a href="/" className='BackButton'><button>Back</button></a> */}
   </>
  )
}
