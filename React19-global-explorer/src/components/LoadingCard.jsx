import React from 'react'
import '../app.css'
import picture from '../assets/loadingpic.jpg'; 
export default function LoadingCard() {
  return (
   <div className="country-container-country">
      <div className="country-img">
        <img src={picture} alt="flag" />
      </div>
      <div className="mainData">
        <div className="country-data">
          <h1>Loading ...</h1>
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
        </div>
        <div className="country-data-one">
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
          <p>
            <strong>Loading ...</strong>
          </p>
          <div className="border">
            <h4>
              Border Countries: <span></span>
              <span></span>
              <span></span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
