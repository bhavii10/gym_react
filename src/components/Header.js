import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Supplements Store</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/join">Join Our Gym</Link></li>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;