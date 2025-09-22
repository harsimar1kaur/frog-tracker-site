import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {Routes, Route} from "react-router-dom";

import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Signin from "./pages/signin.jsx"
import Tracker from "./pages/tracker.jsx"

 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/sign-in" element={<Signin />} />
         <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
