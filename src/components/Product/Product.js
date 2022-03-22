import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price, ratings, seller, stock, img } = props.product;
  console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt={name} />
      <p className="product-name">{name}</p>
    </div>
  );
};

export default Product;
