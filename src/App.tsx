import React from 'react';
import './App.scss';

function App() {

  const [cart_value, setCartValue] = React.useState<GLfloat>();
  const [delivery_distance, setDeliveryDistance] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>();
  const [date, setDate] = React.useState<Date>();

  const [total, setTotal] = React.useState<GLfloat>(0);

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
  const handleDate = (event: React.FormEvent<HTMLInputElement>) => {
    let date = new Date(event.currentTarget.value)
    setDate(date)
  }

  const calculate = () => {
    if (!cart_value || !quantity ) {
      window.alert("Cart value and item quantity must not be zero!")
      return
    } else if (cart_value >= 100) {
      setTotal(cart_value);
      details_display.innerHTML = "Free Delivery!"
      return
    }
    
    details_display.innerHTML = ""
    let cart = 0
    let delivery_fee = 0
    let min_val_sur = 0
    let distance_sur = 0
    let bulk_sur = 0
    let rush = false

    console.log("Calculating total...")


    cart = cart_value

    if (cart <= 10) min_val_sur = 10 - cart

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

    if (date && date.getDay() === 5 && date.getHours() >= 15 && date.getHours() <= 19) {
      console.log("Rush hour!")
      rush = true
    }

    delivery_fee = min_val_sur + distance_sur + bulk_sur

    details_display.innerHTML = `<li>€${distance_sur} - Distance Surcharge`

    if (bulk_sur) details_display.innerHTML = details_display.innerHTML + `<li>€${bulk_sur} - Bulk Surcharge`
    if (min_val_sur) details_display.innerHTML = details_display.innerHTML + `<li>€${min_val_sur} - Minimum Value Surcharge`
    if (rush) {
      delivery_fee = delivery_fee * 1.2
      details_display.innerHTML = details_display.innerHTML + `<li>x1.2 - Rush Multiplier`
    }

    if (delivery_fee >= 15) {
      delivery_fee = 15
      details_display.innerHTML = "€15 - Maximum Delivery Fee"
    }

    setTotal(cart + delivery_fee);
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
        <h2>Date & Time</h2><input type="datetime-local" onChange={handleDate}></input>
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
