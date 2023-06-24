// ReusableComponent.js
import React from 'react';

const Hero2 = ({ imageUrl }) => {
  return (
    <section className="hero2-section py-6">
    <div className="container-fluid  p-0">
     
      <img src={imageUrl} alt='Hero2'/>
      </div>
    
  </section>
  );
};

export default Hero2;
