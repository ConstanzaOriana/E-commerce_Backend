import React from 'react'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const confirmOrder = (ev) => {
    navigate('/orderConfirmation')
  }
  return (
    <div>
    <form>
        <input type = "text" placeholder="Your name" />
        <input type = "text" placeholder="Lastname"/>
        
        <button onClick={() => confirmOrder()}>Submit</button>
    </form>
</div>
  )
}

export default Checkout;