import React from 'react';
import { useContext } from 'react';

const Basket = () => {
const {getItems} = useContext(CartContext);

const renderCart = () => {

}

  return (
    <main>
      <h2>Shopping Basket</h2>
      <button>Checkout</button>
          <h3>Item</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
        <div>
          {renderCart()}
        </div>
        <button>Clear</button>
        <p>Total: USD 0</p>
    </main>
  )
}

export default Basket;