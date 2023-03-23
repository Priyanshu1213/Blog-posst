import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Signup.css'
import axios from "react-axios"


  
export default function Signup() {





  
  const [username, setUsername] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setUsername(event.target.value);    
  };

  const handleSignup2 = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setEmailid(event.target.value);    
  };
  const handleSignup3 = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setPassword(event.target.value);

    
  };
 const Navigate = new useNavigate();

  



    const signup= async()=>{

      Navigate("/firstpage")
      
            const respone= await fetch("http://localhost:5000/api/signup",{
              method:"post",
            
            headers:{"content-Type":"application/json"

            },body:JSON.stringify({
              emailid:emailid,
              username:username,
              password:password

            })})   
     
            
      

            


    }
 


  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='signup'>
        
        <form >
            <input type="text" placeholder="Username" value={username} onChange={ handleSignup} />
            <input type="text" placeholder="EmailId" value={emailid} onChange={ handleSignup2} />
            <input type="password" placeholder="Password" value={password} onChange={ handleSignup3} />
            <button  onClick={signup}>Signup</button>
          </form>
    </div>
    </>
  )
}
