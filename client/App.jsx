import React from 'react';
import image from './assets/images/travel-world.jpg';

const App = (props) => (
  <div id="app" className="main-container">
    <h1>Welcome to Exploration LLC</h1>
    <img src={image} alt="exploration" />
  </div>
);

export default App;
