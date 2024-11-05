import React from 'react';
import SupplementCard from './SupplementCard';
import muscleblaze1 from '../images/muscleblaze1.jpg';
import muscleblaze2 from '../images/muscleblaze2.PNG';
import muscleblaze3 from '../images/muscleblaze3.PNG';
import muscleblaze10 from '../images/muscleblaze10.jpg';
import muscleblaze5 from '../images/muscleblaze5.PNG';
import muscleblaze6 from '../images/muscleblaze6.PNG';
import muscleblaze7 from '../images/muscleblaze7.PNG';
import muscleblaze8 from '../images/muscleblaze8.PNG';
import '../styles/SupplementCard.css';

const SupplementList = ({ addToCart }) => {
  const supplements = [
    { name: 'Muscleblaze Whey Protein', price: 1719, image: muscleblaze1 },
    { name: 'Muscleblaze Whey Gold', price: 3129, image: muscleblaze2 },
    { name: 'Muscleblaze Bizyme Whey', price: 2199, image: muscleblaze3 },
    { name: 'Muscleblaze Fuelone Whey', price: 3150, image: muscleblaze10 },
    { name: 'Muscleblaze Nitro Tech Whey', price: 2999, image: muscleblaze5 },
    { name: 'Muscleblaze Gold Standard Whey', price: 3099, image: muscleblaze6 },
    { name: 'Muscleblaze Bizyme ISO Zero Whey', price: 2499, image: muscleblaze7 },
    { name: 'Muscleblaze Bizyme Whey PR', price: 2749, image: muscleblaze8 },
  ];

  return (
    <section className="box-container">
      {supplements.map((supplement, index) => (
        <SupplementCard 
          key={index}
          name={supplement.name}
          price={supplement.price}
          image={supplement.image}
          addToCart={() => addToCart(supplement)}
        />
      ))}
    </section>
  );
};

export default SupplementList;