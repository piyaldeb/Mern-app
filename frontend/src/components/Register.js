import React, { useState} from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const Navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("./register", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
     
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    
    if (data === 404 || !data) {
      window.alert("User Exists");
    } else {
      window.alert("Succesfull");
      Navigate("/login", { replace: true });
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <input type="text" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="Name" />

        <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Email" />

        <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="Phone" />

        <input type="text" name="work" id="work" value={user.work} onChange={handleInputs} placeholder="Work" />

        <input type="password" name="password" id="password" value={user.password} onChange={handleInputs} placeholder="Password" />

        <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
        <button method="POST" name="siginup" id="signup" onClick={PostData}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
