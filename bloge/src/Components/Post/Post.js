import React from 'react'
import  { useState, useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import axios from 'axios';
import './Post.css'
import { useLocation } from 'react-router-dom';



export default function Post(){

const location = useLocation();
//    console.log(location.state)
   const [tep, settep]= useState([location.state])

   const [data, setData]=useState([]);
    
   useEffect(()=>{
      const temp=async ()=>{
        try {
            const dish=(await axios.get('http://localhost:5000/api/titledisplay')).data
            
            setData(dish.display);
  
        } catch (error) {
            console.log(error)
        }
      //   console.log(data)
      } 
    
      temp()
  
  
   
        },[])
  

  return (
<>
<div>
      <Navbar2  />
    </div>
    <div className='h2'>New Feeds</div>
    <div className='post'>
    {data.map(item=>(

      <div className='post1'>

      <h1>{item.title}</h1>
      <p>{item.comment}</p>

      </div>
      
      ))}
       
           
     </div>
    </>
  );
  }
