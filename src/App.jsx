import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import OrderConfirmation from './components/OrderConfirmation';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactPage />} /> {/* Add the ContactPage route */}
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
