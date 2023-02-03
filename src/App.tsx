import React from 'react';
import './App.scss';

function App() {

  const [cart_value, setCartValue] = React.useState<GLfloat>();
  const [delivery_distance, setDeliveryDistance] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<Number>();
  const [time, setTime] = React.useState<String>("");
  const [subtotal, setSubtotal] = React.useState<GLfloat>();
  const [total, setTotal] = React.useState<GLfloat>();
  const [delivery_fee, setDeliveryFee] = React.useState<GLfloat>();
  const [surcharge, setSurcharge] = React.useState<GLfloat>();

  const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    setCartValue(parseFloat(event.currentTarget.value))
  }
  const handleDistance = (event: React.FormEvent<HTMLInputElement>) => {
    setDeliveryDistance(parseInt(event.currentTarget.value))
  }
  const handleQuantity = (event: React.FormEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.currentTarget.value))
  }
  const handleTime = (event: React.FormEvent<HTMLInputElement>) => {
    setTime(event.currentTarget.value)
  }

  const calculateTotal = () => {
    console.log("calculating total")
    if (cart_value === undefined) {
      return
    }

    setSubtotal(cart_value)

    if (cart_value < 10) {
      setSurcharge(10 - cart_value)
    }

    let distance_fee = Math.ceil(delivery_distance / 500)
    if (delivery_distance === 0) distance_fee = 1

    console.log(distance_fee)
  }


  return (
    <div className="App">
      <>
      <h1 id="title">
        Delivery Fee Calculator
      </h1>
      <div className="row-content">
        <h2>Cart Value</h2> <input placeholder="Enter value..."  onChange={handleValue}></input>
      </div>
      <div className="row-content">
        <h2>Delivery Distance (m)</h2> <input placeholder="Enter value..." onChange={handleDistance}></input>
      </div>
      <div className="row-content">
        <h2>Amount of items</h2> <input placeholder="Enter value..." onChange={handleQuantity}></input>
      </div>
      <div className="row-content">
        <h2>Date & Time</h2><input type="datetime-local" onChange={handleTime}></input>
      </div>
      <div id="button-holder">
        <button id="calculate-button" className="btn btn-light" onClick={calculateTotal}>Calculate Delivery Price</button>
      </div>
      <div className="row-content">
        <h1>Total: </h1>
        <h1 id="total">€ 5</h1>
      </div>
      Sub-total: €{subtotal} ---
      Surcharge: €{surcharge} ---
      Delivery Fee: €{delivery_fee} ---
      Total: €{total} ---
      Distance: {delivery_distance}
      </>
    </div>
  );
}

export default App;
