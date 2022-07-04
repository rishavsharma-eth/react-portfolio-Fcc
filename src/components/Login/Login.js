import React from 'react';
import "./login.scss";
import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <div className="login">
      <h1>Log In</h1>
        <button onClick={signInWithGoogle}> 
            Sign in with Google
        </button>
    </div>
  )
}

export default Login;