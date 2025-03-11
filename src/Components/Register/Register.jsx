
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Regiter.css";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [showPassword,setShowPassword]=useState(false)
  const navigate = useNavigate();
 

  const usernameRegex = /^[a-zA-Z0-9]{3,13}$/;
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const validate = () => {
    let isValid = true;
    let newError = {};

    if (!username || !usernameRegex.test(username)) {
      newError.username = "UserName must be 3-13 characters and contain only letters and numbers";
      isValid = false;
    }
    if (!email || !emailRegex.test(email)) {
      newError.email = "Email must be a valid Gmail address (e.g. example@gmail.com)";
      isValid = false;
    }
    if (!password || !passwordRegex.test(password)) {
      newError.password = "Password must be 6-16 characters and include letters, numbers";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      alert("Bu email artiq movcuddur");
      return;
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Qeydiyyat ugurla tamamlandi");
    navigate("/login");
  };

  return (
    <div className='register-container'>
      <h2>Create an account</h2>
      
      <div className='form-group'>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} />
        <span className='error'>{error.username}</span>
      </div>

      <div className='form-group'>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <span className='error'>{error.email}</span>
      </div>

      <div className='form-group eye-input'>
        <input type= {showPassword? "text":'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='eye-icon' onClick={()=>{setShowPassword(!showPassword)}}>
          {showPassword?<MdOutlineRemoveRedEye/> :<IoEyeOffOutline />}
        </div>
        <span className='error'>{error.password}</span>
      </div>
      <button className='registerBtn' onClick={handleSubmit}>Register</button> 
      <h4 className='account'>Do you have an account? <Link to="/login">Login</Link></h4>
    </div>
  );
}

export default Register;
