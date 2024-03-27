//import './App.css'
import React from 'react'
import Modal from 'react-modal'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Calendar from "./Components/Cal"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
   <Router>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;