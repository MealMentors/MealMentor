//import './App.css'
import React from 'react'
import Modal from 'react-modal'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Schedule from "./Components/Schedule"
import RecipeDictionary from "./Components/RecipeDictionary"
import Welcome from "./Components/Welcome"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
   <Router>
  <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/home/schedule" element={<Schedule/>}/>
    <Route path='/home/catalog' element={<RecipeDictionary/>}/>
    
  </Routes>
</Router>
    </div>
  );
}

export default App;