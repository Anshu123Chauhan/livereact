import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import App from '../App';
const Header=()=>{
    return(
      <>

    <Router>
      <Link to="/About">About Us</Link>
      <Link to="/Contact">Contact Us</Link>
      <Route path='/about' component={About}></Route>
      <Route path='/about' component={About}></Route>
    </Router>
    </>
    )
}
export default Header;