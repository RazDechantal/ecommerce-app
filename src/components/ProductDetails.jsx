import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Product added to cart!');
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/products/${nextId}`);
  };

  const handlePrevious = () => {
    const prevId = parseInt(id) - 1;
    if (prevId > 0) {
      navigate(`/products/${prevId}`);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
        <div className="navigation-buttons">
          <button onClick={handlePrevious} className="nav-button">Previous</button>
          <button onClick={handleNext} className="nav-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
