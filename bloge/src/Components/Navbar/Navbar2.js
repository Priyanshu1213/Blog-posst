import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'



import { useSelector } from 'react-redux';

export default function Navbar(props) {
 const navigate =new  useNavigate();

//  console.log(props.data)
//  console.log("props.data")
// const sel= useSelector();
// console.log(sel)


// const selctore= useSelector((state)=>state.Adding)
//     console.log(selctore);
//     console.log("bur")
    

 
  function post(){
    navigate("/post")
  }
  function Profile(){
    // navigate("/profile",{state:props.data})
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
        <h3 onClick={post}>All Post</h3>
        <h3 onClick={Profile}>Profile</h3>
        <h2 onClick={login}>Log-out</h2>
        {/* <h2 onClick={Tt}>Log-out2</h2> */}
        </div>

    </div>
  )
}