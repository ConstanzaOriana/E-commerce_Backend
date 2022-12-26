import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const Basket = () => {

  const [cartItems, setCartItems] = useState([])
const navigate = useNavigate();
const {getItems, clearBasket, increaseQuantity, decreaseQuantity, removeProduct} = useContext(CartContext);

useEffect(() => {
  setCartItems(getItems());
}, [getItems])

const renderCart = () => {
  const cartItems = getItems();

  if(cartItems.length > 0) {
    return cartItems.map((p) => (
      <>
      <div><Link to={`/products/${p.id}`}>{p.title}</Link></div>
      <div>{p.quantity}</div>
      <button onClick={() => setCartItems(increaseQuantity({id: p.id}))}>+</button>
      <button onClick={() => setCartItems(decreaseQuantity({id: p.id}))}>-</button>
      <button onClick={() => setCartItems(removeProduct({id: p.id}))}>Delete product</button>
      <div>{p.price}</div>
      </>
      ))
  } else {
    return <div>The basket is currently empty</div>
  }
}

const renderTotal = () => {
  const cartItems = getItems();

  const total = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0);
  return total;
}

  return (
    <main>
      <h2>Shopping Basket</h2>
      <button onClick={() => navigate('/checkout')}>Checkout</button>
          <h3>Item</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
        <div>
          {renderCart()}
        </div>
        <button onClick={() => setCartItems(clearBasket())}>Clear</button>
        <p>Total: USD{renderTotal()}</p>
    </main>
  )
}

export default Basket;