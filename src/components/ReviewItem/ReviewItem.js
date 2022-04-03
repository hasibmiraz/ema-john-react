import React from 'react';

const ReviewItem = ({ product }) => {
  const { name, price, shipping, quantity } = product;
  return (
    <div>
      <h2>This is review item: {name}</h2>
    </div>
  );
};

export default ReviewItem;
