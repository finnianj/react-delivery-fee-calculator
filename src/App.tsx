import React from 'react';
import './App.scss';

function App() {

  const [cart_value, setCartValue] = React.useState<GLfloat>();
  const [delivery_distance, setDeliveryDistance] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>();
  const [time, setTime] = React.useState<String>("");

  const [total, setTotal] = React.useState<GLfloat>(0);
  // const [subtotal, setSubtotal] = React.useState<GLfloat>(0);
  // const [bulk_surcharge, setBulkSurcharge] = React.useState<GLfloat>(0);
  // const [delivery_fee, setDeliveryFee] = React.useState<GLfloat>(0);
  // const [surcharge, setSurcharge] = React.useState<GLfloat>(0);

  const details_display = document.getElementById('details') as HTMLElement

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

  const calculate = () => {
    details_display.innerHTML = ""
    let sub_tot = 0
    let min_val_sur = 0
    let distance_sur = 0
    let bulk_sur = 0

    console.log("Calculating total...")

    if (!cart_value || !quantity ) {
      window.alert("Cart value and item quantity must not be empty!")
      return
    }


    sub_tot = cart_value

    if (cart_value <= 10) min_val_sur = 10 - cart_value



    if (delivery_distance === 0) {
      distance_sur = 1
    } else {
      distance_sur = (Math.ceil(delivery_distance / 500))
    }



    if (quantity > 4 && quantity <= 12) {
      bulk_sur = (quantity - 4) * 0.5
    } else if (quantity > 12) {
      bulk_sur = (quantity - 4) * 0.5 + 1.2
    }

    setTotal(sub_tot + min_val_sur + distance_sur + bulk_sur);
    details_display.innerHTML = `<li>Sub total: €${sub_tot} <li> Minimum Value Surcharge: € ${min_val_sur} <li> Distance Surcharge: €${distance_sur} <li> Bulk Surcharge: €${bulk_sur}`
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
        <h2>Item Quantity</h2> <input placeholder="Enter value..." onChange={handleQuantity}></input>
      </div>
      <div className="row-content">
        <h2>Date & Time</h2><input type="datetime-local" onChange={handleTime}></input>
      </div>
      <div id="button-holder">
        <button id="calculate-button" className="btn btn-light" onClick={calculate}>Calculate <br></br> Delivery Price</button>
      </div>
      <div className="row-content">
        <h1>Total: </h1>
        <h1 id="total">€ {total}</h1>
      </div>
      <div id="details"></div>
      </>
    </div>
  );
}

export default App;
