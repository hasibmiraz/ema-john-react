import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price, ratings, seller, img } = props.product;
  console.log(props.product);
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
      <button className="btn-cart">
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
