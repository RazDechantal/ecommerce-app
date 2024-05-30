import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderConfirmation from './components/OrderConfirmation';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/about" element={<div className="container"><h1>About</h1><p>This is a sample digital market application.</p></div>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
