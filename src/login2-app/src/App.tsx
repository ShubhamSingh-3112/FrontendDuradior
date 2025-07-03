import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 

  return (

    
    <Router>
      <Routes>
 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App
