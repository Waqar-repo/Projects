import React from 'react';
import { Link } from 'react-router';
import Loadinghome from './Loadinghome';
import BackButton from './BackButton';

function CountryCard(props) {
  const { name, flag, population, capital, region } = props;
  return name === null ? <Loadinghome /> : (
    
    <>
    
    <Link className="country-card" to ={`country?name=${name}`}>
      <img src={flag} alt="flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population</b>: {population}
        </p>
        <p>
          <b>Region</b>: {region}
        </p>
        <p>
          <b>Capital</b>: {capital}
        </p>
      </div>
    </Link>
    </>
  );
}

export default CountryCard;
