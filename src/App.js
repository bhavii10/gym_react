import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SupplementList from './components/SupplementList';
import ShoppingCart from './components/ShoppingCart';
import JoinGym from './components/JoinGym';
import Membership from './components/Membership';
import './styles/Global.css'; // Ensure this path is correct
import './styles/Cart.scss';   // Ensure this path is correct
import './styles/Membership.css'; // Correct path if located in src/styles

function App() {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);

  const addToCart = (supplement) => {
    const existingItem = cartItems.find(item => item.name === supplement.name);
    let newCartItems;
    if (existingItem) {
      newCartItems = cartItems.map(item => 
        item.name === supplement.name ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCartItems = [...cartItems, { ...supplement, quantity: 1 }];
    }
    setCartItems(newCartItems);
    // Update localStorage with the new cart state
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="main-navigation">
          <Link to="/">Supplements</Link> | 
          <Link to="/join">Join Our Gym</Link> | 
          <Link to="/membership">Membership Plans</Link> | 
          <Link to="/cart">Cart</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<SupplementList addToCart={addToCart} />} />
            <Route path="/join" element={<JoinGym />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
