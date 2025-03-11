
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [showPassword,setShowPassword]=useState(false)
  
  const handleLogin = () => {
    let newError = {};
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existUser = users.find((user) => user.email === email && user.password === password);
    
    if (existUser) {
      alert("Giriş uğurla tamamlandı");
      setEmail("");
      setPassword("");
      setError({});
    } else {
      newError.message = "Invalid password or email";
      setError(newError);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      
      <div className='form-group'>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div className='form-group password-input'>
        <input type={showPassword? "text" : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='eye-icon' onClick={()=>setShowPassword(!showPassword)}>
          {showPassword? <MdOutlineRemoveRedEye/> :<IoEyeOffOutline /> }
        </div>
      </div>
      
      <span className='error'>{error.message}</span>
      <div className='remember-me'>
        <input type='checkbox' id='remember' />
        <label htmlFor='remember'>Remember me</label>
      </div>
      <button className='loginBtn' onClick={handleLogin}>Login</button>
      
      <p className='register-link'>Don't have an account? <Link to="/">Register</Link></p>

      <div className='icons'>
        <div className='icons-items'><FaFacebook /></div>
        <div className='icons-items'><FaTwitter /></div>
        <div className='icons-items'><FcGoogle /></div>
        <div className='icons-items'><FaInstagram /></div>
      </div>
    </div>
  );
}

export default Login;
