import React from 'react';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { cart, clearCart } = useCart();

  const handleOrder = () => {
    clearCart();
    alert('Order placed successfully!');
  };

  return (
    <div className="container">
      <h1>Order Confirmation</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleOrder}>Confirm Order</button>
    </div>
  );
};

export default OrderConfirmation;
