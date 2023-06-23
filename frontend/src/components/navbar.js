import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const navbar = () => {
   
  return (
  
    <header>
        <head>
  <link rel="stylesheet" type="text/css" href="styles.css"></link>
</head>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="login">Login</a></li>
          <li><a href="register">Register</a></li>
          <li><a href="contactUS">Contact</a></li>
        </ul>
      </nav>
    </header>
  );


  
}

 

export default navbar