import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
  const [products] = useProducts();
  return (
    <div className="orders">
      <h2>This is orders: {products.length}</h2>
    </div>
  );
};

export default Orders;
