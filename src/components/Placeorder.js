// Placeorder.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect'; // Import the Typewriter effect
import '../styles/Placeorder.css';

function Placeorder({ setCartItems }) {
  const navigate = useNavigate();

  const redirectToHome = () => {
    setCartItems([]); // Clear the cart items
    navigate('/'); // Navigate to homepage
  };

  return (
    <div className="placeorder-page">
      <div className="thank-you-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Thank you for placing your order!")
              .start();
          }}
          className="thank-you-text"
          cursorColor="#2196F3"
        />
        <button className="home-button" onClick={redirectToHome}>
          Go to Homepage
        </button>
      </div>
      <footer className="placeorder-footer">
        <p>
          LiftVerse © 2024. All rights reserved by{' '}
          <span>Gunjan, Bhavisha, Bhavya, Anurag</span>
        </p>
      </footer>
    </div>
  );
}

export default Placeorder;