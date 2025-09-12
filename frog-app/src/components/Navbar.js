import React from 'react';
import './Navbar.css'; 
import frogLogo from '../assets/frog.png';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left"> 
    <img src={frogLogo} alt="FrogTracker Logo" className="logo-img" />
  </div>
</nav>
);
};

export default Navbar;