import React, { useState } from 'react';
import Login from './Login.jsx';
import Signup from './Signup';

function AuthButton() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  function handleLoginClick() {
    setShowLogin(true);
  }

  function handleSignupClick() {
    setShowSignup(true);
  }

  function handleLoginClose() {
    setShowLogin(false);
  }

  function handleSignupClose() {
    setShowSignup(false);
  }

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Signup</button>
      {showLogin && <Login onClose={handleLoginClose} />}
      {showSignup && <Signup onClose={handleSignupClose} />}
    </div>
  );
}

export default AuthButton;
