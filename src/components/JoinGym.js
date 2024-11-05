import React from 'react';
import '../styles/Join.css';

function JoinGym() {
  const handleJoinClick = (e) => {
    e.preventDefault();
    alert('You have successfully joined');
  };

  return (
    <section className="join-section">
      <h2 className="heading">Join Our Gym</h2>
      <p>Thank you for choosing our gym! Please fill out the form below to complete your registration.</p>
      <form className="join-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required />
        <label htmlFor="plan">Choose Your Plan:</label>
        <select id="plan" name="plan" required>
          <option value="basic">Basic - ₹1000/Month</option>
          <option value="pro">Pro - ₹1500/Month</option>
          <option value="premium">Premium - ₹3000/Month</option>
        </select>
        <button type="submit" onClick={handleJoinClick}>Join Now</button>
      </form>
    </section>
  );
}

export default JoinGym;