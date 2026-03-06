import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import CountryCard from './components/CountryCard';
import CountriesContainer from './components/CountriesContainer';
import { useState } from 'react';
import './coutry.css';
import './App.css';
import { Outlet } from 'react-router';
const App = () => {
 
  return (
    <>

      <Header />
      <Outlet />
   
    </>
  );
};

export default App;
