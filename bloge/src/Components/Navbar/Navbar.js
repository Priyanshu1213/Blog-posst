import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
 const navigate =new  useNavigate();
  function sign2(){
    navigate("/signup")
  }
  function profile(){
    navigate("/profile")
  }

  function login(){
    navigate("/firstpage")
  }

  return (
    <div className='Nav'>
        <div className='Nav1'>
            <h1>Blogs</h1>
        </div>
        
        <div className='Nav2'>
        {/* <h3 onClick={profile}>Profile</h3> */}
        <h4 onClick={login}>Login</h4>
            <h2 onClick={sign2}>Signup</h2>
        </div>

    </div>
  )
}
