import React from 'react';
import './App.css';
import image from './images/white_suit_cupids.png'
function App() {
  return (
    <div className="App">
      <h1 className='temp-banner'>
        Welcome to Cupid's Nemesis's website! We are currently a work in progress!
      </h1>
      <div className="image-container">
        <img className="loading-image" src={image} alt = 'temp image'></img>
      </div>
    </div>
  );
}

export default App;
