import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props) {
 const navigate =new  useNavigate();

 console.log(props.data)
 console.log("props.data")




 
  // function sign2(){
  //   navigate("/signup")
  // }
  function profile(){
    navigate("/profile",{state:props.data})
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
        <h3 onClick={profile}>Profile</h3>
        <h2 onClick={login}>Log-out</h2>
        </div>

    </div>
  )
}