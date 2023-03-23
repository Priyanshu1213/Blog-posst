import React from 'react';
import Firstpage from './Firstpage';
import './App.css';
import LandingPage from './Components/Home/LandingPage';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Signup from "./Components/Signup/Signup"
import Post from './Components/Post/Post';
import Profile from './Components/Profile/Profile';
import Create from './Components/Create/Create';

function App() {
  return (
    <div >
      {/* <Firstpage/> */}
      
<BrowserRouter>
<Routes>
  
  <Route  path="/"   element={<LandingPage/>}/>
  <Route  path="/signup"   element={<Signup/>}/>
  <Route  path="/firstpage"   element={<Firstpage/>}/>
  <Route  path="/post"   element={<Post/>}/>
  <Route  path="/profile"   element={<Profile/>}/>
  <Route  path="/create"   element={<Create/>}/>

</Routes>
</BrowserRouter>
    
    </div>
  );
}

export default App;
