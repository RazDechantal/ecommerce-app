import React from 'react';
import { FaStore } from 'react-icons/fa';  // You need to install react-icons

const HomePage = () => {
  return (
    <div className="home-container">
      <FaStore className="home-icon" />
      <h1 className="home-title">Welcome to the Digital Market</h1>
      <p className="home-description">
        Discover the best products in our store. We offer a wide range of items from electronics to fashion.
        Shop now and enjoy the best deals!
      </p>
    </div>
  );
};

export default HomePage;
