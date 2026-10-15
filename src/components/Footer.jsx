import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="brand-col">
            <div className="logo-wrap">
              <span className="logo-icon">DS</span>
              <span className="logo-title">Dev <span>Stack</span></span>
            </div>
            <p className="brand-text">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="social-links">
              <a href="#github">GitHub</a>
              <span className="dot">•</span>
              <a href="#twitter">Twitter</a>
              <span className="dot">•</span>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <div className="nav-cols">
            <div className="nav-group">
              <h4>PRODUCT</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="nav-group">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="nav-group">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;