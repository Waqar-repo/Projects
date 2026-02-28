
import React, { use, useState } from 'react'

import BooksContainer from '../components/BooksContainer'
import Header from '../components/Header'


export default function Home() {
const [query,setQuery] = useState('')
  return (
    <>
     <Header setQuery={setQuery} />
   <BooksContainer query={query} />
  </>
  )
}
