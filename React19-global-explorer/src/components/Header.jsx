import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Header() {
  const [isDark,setDark] = useState(false)
  useEffect(()=>{
    if(isDark){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
    localStorage.setItem('isDark', isDark);
  },[isDark])
  return (
    <div className="header-content">
      <h2 className="title-country">
        <Link for='/'>Where is the world?</Link>
        {/* <a href="/">Where is the world?</a> */}
      </h2>
      <p onClick={()=> setDark(!isDark)}
        className='modeSwitcher'
        >
        <i className="fa-regular fa-moon" />
        &nbsp;{isDark ? 'Light Mode' : 'Dark Mode'}
      </p>
    </div>
  );
}
