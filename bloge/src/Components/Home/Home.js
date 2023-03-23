import React, { useState, useEffect } from 'react';
import axios from "axios"
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData]=useState();
  const Navigate = new useNavigate();
  
  
  useEffect(()=>{
    const temp=async ()=>{
      try {
          const logindata=(await axios.get('http://localhost:5000/api/login')).data
          // console.log(logindata.logindata1)
          setData(logindata.logindata1);
      } catch (error) {
          console.log(error)
      }
      // console.log(data)
    } 
  
    temp()


 
      },[])

      // console.log(data)
    // }

    function Login(){

var usernamedisplay=username;
// var usernamebackend=data.emailid;
var passwordisplay=password;
// var passwordbackend= data.password;

var comp=0;
var pass=0;var name=0;
var email=0;
data.map(item=>{
  if(item.emailid===usernamedisplay && item.password===passwordisplay){
      comp=888;
      pass=item.password;
      email=item.emailid;
      name=item.username;
  }
})
if(comp===888){
  alert("you are loged in")
  Navigate("/post", {state:{pass:pass,
   email:email,name:name}})

}else {
  alert("not valid")
}

   
  }


  

  return (
  <div className="Container">
      
        <h1>My Blog</h1> 
        
        
          <form >
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit"  onClick={Login}>Login</button> 
                {/* <button >Logout</button> */}
            </form>
        
        
        
            
    
    </div>

    );
}
                
 