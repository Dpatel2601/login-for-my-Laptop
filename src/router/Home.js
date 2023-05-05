import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const Login = useNavigate();
  const Signup = useNavigate();
  return (
    <div>
      <button id='LoginBTN' onClick={() => Login("/Login")}>Login</button>
      <button id='SignupBTN' onClick={() => Signup("/Signup")}> Signup </button>
    </div>
  )
}

export default Home
