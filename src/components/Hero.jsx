import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-banner.png';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Ideal <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="hero-description">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-buttons">
            <button className="btn-explore">Explore Technologies</button>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Development Stack Illustration" className="hero-image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;