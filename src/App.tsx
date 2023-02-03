import React from 'react';
import './App.scss';

function App() {

  const [cart_value, setCartValue] = React.useState<GLfloat>();
  const [delivery_distance, setDeliveryDistance] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>();
  const [time, setTime] = React.useState<String>("");

  const [subtotal, setSubtotal] = React.useState<GLfloat>(0);
  const [total, setTotal] = React.useState<GLfloat>();
  const [bulk_surcharge, setBulkSurcharge] = React.useState<GLfloat>(0);
  const [delivery_fee, setDeliveryFee] = React.useState<GLfloat>(0);
  const [surcharge, setSurcharge] = React.useState<GLfloat>(0);

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

  const calculateExtras = () => {
    console.log("calculating total")
    if (cart_value === undefined || cart_value === 0) {
      return
    }

    setSubtotal(cart_value)

    if (cart_value <= 10) {
      setSurcharge(10 - cart_value)
    }

    setDeliveryFee(Math.ceil(delivery_distance / 500))
    if (delivery_distance === 0) setDeliveryFee(1)

    if (quantity) {
        if (quantity > 4 && quantity < 12) {
          setBulkSurcharge((quantity - 4) * 0.5)
        } else if (quantity >= 12) {
          setBulkSurcharge((quantity - 4) * 0.5 + 1.2)
        }
    }
    let total = subtotal + surcharge + delivery_fee
    setTotal(total)
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
        <button id="calculate-button" className="btn btn-light" onClick={calculateExtras}>Calculate <br></br> Delivery Price</button>
      </div>
      <div className="row-content">
        <h1>Total: </h1>
        <h1 id="total">€ {total}</h1>
      </div>
      Sub-total: €{subtotal} ---
      Surcharge: €{surcharge} ---
      Delivery Fee: €{delivery_fee} ---
      Bulk Surcharge: €{bulk_surcharge} ---
      Total: €{total} ---
      Distance: {delivery_distance}
      </>
    </div>
  );
}

export default App;
