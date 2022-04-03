import React from 'react';
import './Cart.css';

const Cart = ({ cart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <p className="cart-title">Order Summary</p>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total price: ${total}</p>
        <p>Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <div className="cart-btn">{children}</div>
    </div>
  );
};

export default Cart;
