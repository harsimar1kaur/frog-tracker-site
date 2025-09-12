import React from 'react';
import './Navbar.css'; 
import frogLogo from '../assets/frog.png';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left"> 
    <a href="/" className="logo">
      <img src={frogLogo} alt="FrogTracker Logo" className="logo-img" />
    </a>
  </div>

  <div className='navbar-center'>
    <ul className="nav-links">
      <li>
        <a href="/faq">HOME</a>
      </li>
      <li>
        <a href="/help"> ABOUT </a>
      </li>
       <li>
        <a href="/help"> CONTACT </a>
      </li>
    </ul>
  </div>

  <div className='navbar-right'>
    <ul className="nav-links2">
      <li>
        <a href="/faq">SIGN IN</a>
      </li>
    </ul>
  </div>

</nav>
);
};

 

export default Navbar;