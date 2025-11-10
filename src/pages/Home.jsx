import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import './Home.css';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="video-section">
        <h2>See How Peer Learning Works</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/KbET1ebLuGE"
            title="FundaNami Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
