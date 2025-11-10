import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://funda-nami.vercel.app/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="services-container">
        <h1>Explore Skills & Sessions</h1>
        <p>Affordable, practical learning from students just like you.</p>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>{service.price}</span>
              <button className="book-btn">Book a Session</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
