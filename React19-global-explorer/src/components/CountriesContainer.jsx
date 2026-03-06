import React, { useEffect, useState } from 'react';
// import countriesdata from '../../countriesdata';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import Loadinghome from './Loadinghome';
export default function CountriesContainer({ queryProp,region }) {
  const [countriesdata, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders',
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false)
      });

    
    return () => {
      return console.log('clearning');
    }

  }, []);

  if(loading){
    return(
       <div className="countries-container">
        
{
[...Array(8)].map((_,index)=>{
  return <Loadinghome key={index} />
})
}

       </div>
       
    )
  }

  return (
    <>
    
      <div className="countries-container">
        {countriesdata
          .filter((country) =>
            country.name.common.toLocaleLowerCase().includes(queryProp)
          ).filter((country)=>  country.region.includes(region))
          .map((country) => {
            

            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString()}
                capital={country.capital?.[0]}
                region={country.region}
              />
            );
          })}
      </div>
    </>
  );
}
