import React from 'react'
import './Profile.css'
import Navbar2 from '../Navbar/Navbar'
import axios from 'axios';
import  { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Profile (props) {
    
    const location= useLocation();
    // console.log((location.state).length)
    // console.log("location.state324")
    // const emailid=(location.state)[0].email
const[emailid2,setemailid2]=useState("Anoop12@gmail.com")

    const [data, setData]=useState([]);



    const Navigate = new useNavigate();

function create(){
    Navigate("/create"  ,{state:location.state})
}

useEffect(()=>{
    const temp=async ()=>{
      try {
          const dish=(await axios.get('http://localhost:5000/api/login1')).data
          
          setData(dish.logindata12);

      } catch (error) {
          console.log(error)
      }
    } 
    if(((location.state).length)===1){
        setemailid2((location.state)[0].email)
            
        }
        
    temp()
},[])




var postsofuser=[];

 for(let i=0;i<data.length;i++){
    if(data[i].emailid===emailid2){
        postsofuser.push(data[i])

    }
 }




 




  return (
    <>
    <div>
      <Navbar2/>
    </div>
    <div className='profile'>
        <button className='btu' onClick={create}>Create</button>
        
          {
            postsofuser.map(item=>(
                <div className='profile1'>
        <div className='content1'>
        
            <div  className='c1'>
                
                <h3 >{item.title}</h3>
                <p > {item.comment}</p>
                
            </div>
            
        </div>
        <div className='content2'>
            <div className='c2'>
            <button>Update</button>
            </div>
            <div className='c2'>
            <button>Delete</button>
            </div>
            
        </div>

    </div>

            ))
          }  
    
        
        



   
    </div>
    </>
    
  )
}
