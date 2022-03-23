import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ handleAddToCart, product }) => {
  const { name, price, ratings, seller, img } = product;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-decription">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} Stars</small>
        </p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>
        <p>
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </p>
      </button>
    </div>
  );
};

export default Product;
