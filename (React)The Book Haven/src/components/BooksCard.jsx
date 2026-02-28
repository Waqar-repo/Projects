import React from 'react';

export default function BooksCard({ title, author, image }) {
  return (
    
    <div className="cardContainer">
      <img src={image} alt="image" />
      <p>{title}</p>
      <p>
        {' '}
        by <b>{author}</b>
      </p>
    </div>
  
  );
}
