import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ShoppingCart.css'; // Import the CSS file

const ShoppingCart = () => {
  const { cart, updateCart, removeFromCart } = useCart();

  const handleQuantityChange = (product, quantity) => {
    updateCart(product, quantity);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <h2>{item.title}</h2>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                  min="1"
                />
                <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/order-confirmation">Proceed to Checkout</Link>
    </div>
  );
};

export default ShoppingCart;
