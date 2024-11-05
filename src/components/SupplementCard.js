import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SupplementCard.css'; // Ensure you're importing the correct CSS file

const SupplementCard = ({ name, price, image, addToCart }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    addToCart();
    navigate('/cart'); // Redirect to the Cart page
  };

  return (
    <div className="supplement-card">
      <img src={image} alt={name} className="supplement-image" />
      <div className="supplement-info">
        <h3>{name}</h3>
        <p className="price">₹{price.toFixed(2)}</p>
        <button onClick={handleOrderClick} className="order-button">Order</button> {/* Added className for styling */}
      </div>
    </div>
  );
};

export default SupplementCard;