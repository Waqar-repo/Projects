import React from 'react'
import '../app.css'
import picture from '../assets/loadingpic.jpg'; 
export default function Loadinghome() {
  return (
    <>
     
    
    <a className="country-card">
      <img src={picture} alt="flag" />
      <div className="card-text">
        <h3 className="card-title">loading...</h3>
        <p>
          <b>loading...</b>:
        </p>
        <p>
          <b>loading...</b>: 
        </p>
        <p>
          <b>loading...</b>:
        </p>
      </div>
    </a>
    </>
    
  )
}
