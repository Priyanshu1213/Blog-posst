import React from 'react'
import './Profile.css'
import Navbar2 from '../Navbar/Navbar2'
import axios from 'axios';
import  { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profile (props) {
    
    const location= useLocation();

    const selctore= useSelector((state)=>state.Adding)
    console.log(selctore);
    console.log("bur")


    // console.log((location.state).length)
    // console.log("location.state324")
    // const emailid=(location.state)[0].email
const[emailid2,setemailid2]=useState("Anoop2@gmail.com")

    const [data, setData]=useState([]);



    const Navigate = new useNavigate();

function create(){
    Navigate("/create"  ,{state:selctore})
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
    // if(((location.state).length)===1){
    //     setemailid2((location.state)[0].email)
            
    //     }
        
    temp()
},[selctore])



var postsofuser=[];

 for(let i=0;i<data.length;i++){
    // if(data[i].emailid===emailid2){
        if(data[i].emailid===selctore[0]){

        postsofuser.push(data[i])

    }
 }


 function handledelete(emailid){
    axios.delete(`http://localhost:5000/api/login1/${emailid}`)
    
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
            <button onClick={()=>handledelete(item.emailid)}>Delete</button>
            </div>
            
        </div>

    </div>

            ))
          }  
    
        
        



   
    </div>
    </>
    
  )
}
