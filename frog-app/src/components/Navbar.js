import React from 'react';
import './Navbar.css'; 
import frogLogo from '../assets/frog.png';
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left"> 
    <Link to="/tracker" className="logo">
      <img src={frogLogo} alt="FrogTracker Logo" className="logo-img" />
    </Link>
  </div>

  <div className='navbar-center'>
    <ul className="nav-links">
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/about"> ABOUT </Link>
      </li>
       <li>
        <Link to="/contact"> CONTACT </Link>
      </li>
    </ul>
  </div>

  <div className='navbar-right'>
    <ul className="nav-links2">
      <li>
        <Link to="/sign-in"> SIGN-IN </Link>
      </li>
    </ul>
  </div>

</nav>
);
};

 

export default Navbar;