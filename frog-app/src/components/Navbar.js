import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import frogLogo from "../assets/frog.png";
import { Link } from "react-router-dom";

import {
  auth,
  signInWithGooglePopup,
  signOutUser,
  onAuthStateChanged,
} from "../services/firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup(); 
    } catch (e) {
      console.error("Sign-in failed:", e);
      alert(e.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (e) {
      console.error("Sign-out failed:", e);
      alert(e.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/tracker" className="logo">
          <img src={frogLogo} alt="FrogTracker Logo" className="logo-img" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        {user ? (
          <div className="user-info">
            <span className="user-name">{user.displayName?.split(" ")[0]} </span>
            <button className="signout-btn" onClick={handleSignOut}>SIGN-OUT</button>
          </div>
        ) : (
          <button className="signin-btn" onClick={handleSignIn}>SIGN-IN</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
