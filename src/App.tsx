import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Concerts from './pages/Home/Home';
import Contact from './pages/Contact';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={'/'}>
        <Routes>
            <Route path="" element={<Concerts />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
