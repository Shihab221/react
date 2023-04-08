import React from 'react';

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from "../components/Home";


function NavigationBar() {
  return (

   
    <div class='navbar'> 
    <nav >
      
        <ul>
          <li className='brand'><a href="/">SwadeXpress</a></li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">Products</a></li>
          <li><a href="/contact">Community</a></li>
        </ul>
      
    </nav>
    </div> 
  );
}

export default NavigationBar;
