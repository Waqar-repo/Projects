import React from 'react'
import img from '../assets/1544764567.png'
export default function LoadingCard() {
  return (
    <div>
      <div className="cardContainer">
      <img src={img} alt="image" />
      <p>Loading</p>
      <p>
        {' '}
         <b>Loading</b>
      </p>
    </div>
    </div>
  )
}
