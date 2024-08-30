import React from 'react';
import './App.css';
import image from './images/white_suit_cupids.png'
import NavBar from './Navbar/NavBar';
import Social from './Social/Social'
import Concerts from './Home/Home';
function App() {
  return (
    <div className="App">
      <Concerts></Concerts>
    </div>
  );
}

export default App;
