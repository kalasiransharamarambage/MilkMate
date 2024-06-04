import React, { useState } from 'react';

import './register.css'
import googleIcon from './images/google.png';
import facebookIcon from './images/fb.png'; 
import appleIcon from './images/apple.png'; 
function Register() {
  return (
    <div className="app">
         <div className="sign-in-form">
        <h2>Sign in</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Full name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email address" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="or">OR LOGIN WITH</div>
        <div className="social-login">
          <button className="google"> <img src={googleIcon} alt="Google" className="icon" /> Google  </button>
          <button className="apple"> <img src={appleIcon} alt="apple" className="icon" />Apple</button>
          <button className="facebook"><img src={facebookIcon} alt="facebook" className="icon" />Facebook</button>
        </div>
        <div className="sign-up">
          <p>Don’t have an account?</p>
          <a href="#signup">Sign up</a>
        </div>
      </div>
    </div>
  
  );
}export default Register;
