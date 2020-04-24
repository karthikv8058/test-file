import React from 'react';
import LoginForm from './LoginForm';
import LoginSpotlight from './LoginSpotlight';

function Login() {
  return (
    <div className="row">
      <LoginSpotlight/>
      <LoginForm/>
    </div>
  );
}

export default Login;
