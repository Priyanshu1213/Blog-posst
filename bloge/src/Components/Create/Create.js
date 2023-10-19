import React from 'react'
import  { useState, useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { useLocation } from 'react-router-dom';
import './Create.css'
export default function Create() {
  // const [profiles, setProfiles] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
 const location= useLocation();




 
    // const createProfile = () => {
    //   const newProfile = { title, content };
    //   setProfiles([...profiles, newProfile]);
    //   setTitle('');
    //   setContent('');

      console.log('yahipe hai  ${location.state}')
      var tr=location.state[0];
      console.log(tr[0])

    // };
    

    const postblog= async()=>{

    
      
            const respone= await fetch("http://localhost:5000/api/post",{
              method:"post",
            
            headers:{"content-Type":"application/json"

            },body:JSON.stringify({
              emailid:tr[0],
              username:"anoop",
              password:tr[1],
              title:title,
              comment:content

            })})   
     
            
            setTitle('');
            setContent('');

            


    }

  return (
    <>
    <div>
      <Navbar2/>
    </div>
    <div className='create'>
        
    <div className='create1'>
        <div className='tex1'>
            <div className='t1'>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

            </div>
            <div className='t2'>
            <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />

            </div>
        </div>
        
    </div>
    <button className='button'   onClick={postblog}>Create</button>
    </div>
    
    </>
  )
}
