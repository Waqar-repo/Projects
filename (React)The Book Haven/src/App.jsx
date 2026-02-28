import React, { use, useState } from 'react'
import BooksCard from './components/BooksCard'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
export default function App() {
  
  return (
    <>
      <Header />
   <Outlet />
 
  </>
  )
}
