import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Concerts from './Home/Home';
import Contact from './Contact/Contact';
import image from './images/Cupid-Logo.png'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Concerts />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
