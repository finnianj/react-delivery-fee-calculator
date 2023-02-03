import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 id="title">
        Delivery Fee Calculator
      </h1>
      <div className="row-content">
        <h2>Cart Value</h2> <input placeholder="Enter value..."></input>
      </div>
      <div className="row-content">
        <h2>Delivery Distance</h2> <input placeholder="Enter value..."></input>
      </div>
      <div className="row-content">
        <h2>Amount of items</h2> <input placeholder="Enter value..."></input>
      </div>
      <div className="row-content">
        <h2>Date & Time</h2><input type="datetime-local"></input>
      </div>
      <div id="button-holder">
        <button id="calculate-button" className="btn btn-light">Calculate Delivery Price</button>
      </div>
      <div className="row-content">
        <h1>Total: </h1>
        <h1 id="total">€ 5</h1>
      </div>
    </div>
  );
}

export default App;
