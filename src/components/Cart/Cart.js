import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <p className="cart-title">Order Summary</p>
      <div className="cart-details">
        <p>Selected Items: {cart.length}</p>
        <p>Total price: $1140</p>
        <p>Shipping Charge: $5</p>
        <p>Tax: 1114</p>
        <p className="grand-total">Grand Total: $1559</p>
      </div>
      <div className="cart-btn">
        <button className="clear-cart">Clear Cart</button>
        <br />
        <button className="review-order">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
