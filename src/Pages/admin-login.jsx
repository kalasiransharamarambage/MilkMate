import React, { useState } from 'react';

import './admin-login.css'

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
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
       
       
   
      </div>
    </div>
  
  );
}export default Register;
