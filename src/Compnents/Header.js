import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Routes, Navigate} 
        from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import User from './User';
import Search from './Search';
import Error from './Error';
export default function Header() {
    return (
        <div>
            
<Router>
        
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="contact">Contact Us</Link></li>
            <li><Link to="blog">Blog</Link></li>
            <li><Link to="/user/Anshu/chauhan">User</Link></li>
            <li><Link to="search">Search</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="blog" element={<Blog />} />
          <Route exact path="/user/:name/:lname" element={<User />} />
          <Route exact path="search" element={<Search />} />
          
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
        </div>
    )
}
