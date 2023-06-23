import React, { useState} from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const Navigate=useNavigate();
  

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser= async(e)=>{
    e.preventDefault()
    const res=await fetch('./login',{
      method:"POST",
     
      header:{
        "Content-Type":"application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data =  res.json()
   
    if (res.status === 404 || !data) {
      window.alert("Invalid alart");
    } else {
      window.alert("Succesfull");
      // console.log(email)
      // console.log(password)
      Navigate("/", { replace: true });
    }

  }
    // Customize the background color and text
    const backgroundColor = '#FF5B71';
    const textColor = '#333333';
  
    return (
      <div className="sign-in-page" style={{ backgroundColor }}>
        <div className="form-container">
          {/* <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div> */}
          <form method='POST' className="sign-in-form">
            <h2>Sign In</h2>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)} 
               placeholder="Enter your password" />
            </div>
            <button type="submit" onClick={loginUser}
            >Sign In
            
            </button>
            <div className="new-users">
              New users? <a href="/register">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login