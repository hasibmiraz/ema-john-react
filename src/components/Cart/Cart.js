import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total += product.price;
    shipping += product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <p className="cart-title">Order Summary</p>
      <div className="cart-details">
        <p>Selected Items: {cart.length}</p>
        <p>Total price: ${total}</p>
        <p>Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <div className="cart-btn">
        <button className="clear-cart">
          Clear Cart <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <br />
        <button className="review-order">
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
