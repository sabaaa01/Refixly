import {Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from "./Pages/LandingPage"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import UserHome from "./Pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
      </Routes>
    </>
  )
};

export default App
