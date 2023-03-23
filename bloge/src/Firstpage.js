import React from 'react'

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Post/Post';
export default function Firstpage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        {/* <Post/> */}
    </div>
  )
}
