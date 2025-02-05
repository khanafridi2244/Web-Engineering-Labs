import React from 'react';
import './Style.css'; 

function Login () {
  return (
    <div className="container">
      <h1 className="heading">Login</h1>
      <div className="form">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default Login;

