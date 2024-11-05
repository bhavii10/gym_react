import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Membership.css'; // Adjust the path based on your folder structure

function Membership() {
  return (
    <div>
      <section className="plans">
        <h2 className="heading">Our Pricing</h2>
        <p className="description">
          <b>Our pricing plan comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</b>
        </p>
        <div className="plans-content">
          <div className="box">
            <h3>BASIC PLAN</h3>
            <p>
              Our Basic Plan is the perfect starting point for individuals looking to kickstart their fitness journey or maintain an active lifestyle.
            </p>
            <h2>₹1000/Month</h2>
            <ul>
              <li>Access: Regular hours</li>
              <li>Classes: 2/month</li>
              <li>Training: 1 intro session</li>
            </ul>
            <Link to="/join" className="purchase-button">
              Purchase Now
            </Link>
          </div>

          <div className="box">
            <h3>PRO PLAN</h3>
            <p>
              With this flexible membership, you'll have access to our state-of-the-art gym facilities, expert trainers, and a vibrant fitness community.
            </p>
            <h2>₹1500/Month</h2>
            <ul>
              <li>Access: All hours</li>
              <li>Classes: 5/month</li>
              <li>Training: 1 session/month</li>
            </ul>
            <Link to="/join" className="purchase-button">
              Purchase Now
            </Link>
          </div>

          <div className="box">
            <h3>PREMIUM PLAN</h3>
            <p>
              Our Premium Plan offers the ultimate fitness experience with 24/7 access, unlimited classes, personalized training sessions, and at-home workout options for those seeking top-tier results.
            </p>
            <h2>₹3000/Month</h2>
            <ul>
              <li>Access: 24/7</li>
              <li>Classes: Unlimited</li>
              <li>Training: 4 sessions/month</li>
              <li>At Home Workout</li>
            </ul>
            <Link to="/join" className="purchase-button">
              Purchase Now
            </Link>
          </div>           
        </div>  
      </section>
    </div>
  );
}

export default Membership;
