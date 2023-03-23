import React from 'react'
import "./Land.css"
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
  const Navigate=new useNavigate();
function sign(){

 Navigate("./signup")
}

  return (
    <div className='lp1'><button onClick={sign}> Singup</button> </div>
  )
}
