import React from 'react';
import './App.css';
import image from './images/white_suit_cupids.png'
import NavBar from './Navbar/NavBar';
import Social from './Social/Social'
import Concerts from './Concerts/Concerts';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='temp-banner'>
        Welcome to Cupid's Nemesis's website!
      </h1>
      <div className="image-container">
        <img className="loading-image" src={image} alt = 'temp image'></img>
      </div>
      <Concerts></Concerts>
      <Social></Social>
    </div>
  );
}

export default App;
