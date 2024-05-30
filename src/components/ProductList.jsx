import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';  // Import the CSS file

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
