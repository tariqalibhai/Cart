import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button';
import Footer from './Components/Footer';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(1);
  const updateQuantityAndTotalPrice = (increment) => { 
    let newQuantity;
if (increment===true) {
  newQuantity = quantity + 1;
} 
else if (increment===false) {
  newQuantity = quantity - 1;
}

let newTotalPrice;
if (increment===true) {
  newTotalPrice=totalPrice + 1}
else if (increment ===false) {
  newTotalPrice=totalPrice - 1;
}

    // Ensure quantity and total price don't go below 0
    setQuantity(newQuantity);
    setTotalPrice( newTotalPrice);
  };

  return (
    <div>
      <Button
        incrementQuantity={() => updateQuantityAndTotalPrice(true)}
        decrementQuantity={() => updateQuantityAndTotalPrice(false)}
        quantity={quantity}
      />
      <Footer quantity={quantity} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
