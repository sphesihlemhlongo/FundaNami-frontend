import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover. Learn. Teach.</h1>
        <p>At FundaNami, students unlock their potential by learning from each other — anytime, anywhere.</p>
        <button className="cta-btn">Join the Movement</button>
      </div>
    </section>
  );
}

export default HeroSection;
