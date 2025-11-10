import React from 'react';
import { useNavigate } from 'react-router-dom';  // 👈 import navigation hook
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate(); 

  const handleJoinClick = () => {
  document.body.classList.add('fade-out');
  setTimeout(() => navigate('/services'), 300);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover. Learn. Teach.</h1>
        <p>
          At FundaNami, students unlock their potential by learning from each other,
          anytime, anywhere.
        </p>
        <button className="cta-btn" onClick={handleJoinClick}>
          Join the Movement
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
