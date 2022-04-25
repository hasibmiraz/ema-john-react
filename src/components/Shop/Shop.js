import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(
      `https://afternoon-shelf-60021.herokuapp.com/products?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch('https://afternoon-shelf-60021.herokuapp.com/productsCount')
      .then((res) => res.json())
      .then(({ count }) => setPagesCount(Math.ceil(count / size)));
  }, [size]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity += 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button className="clear-cart">
            Clear Cart <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <br />
          <Link className="review-order" to="/orders">
            Review Order {'  '}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        {[...Array(pagesCount).keys()].map((number, index) => (
          <button
            onClick={() => setPage(number)}
            key={index}
            className={page === number ? 'selected' : ''}
          >
            {number + 1}
          </button>
        ))}
        <select defaultValue={10} onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
