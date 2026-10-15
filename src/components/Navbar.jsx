import React,{ useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
const Navbar = ()=>{
  const[isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
                <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {}
        <div className="navbar-logo">
          <span className="logo-badge">DS</span>
          <span className="logo-text">Dev Stack</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
            <a 
            href={link.href} 
                className={`nav-item ${link.active ? 'active' : ''}`}
              >
             {link.name}
          </a>
        </li>
          ))}
        </ul>
        {}
        <div className="nav-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
      {}
      {isOpen && (
        <div className="mobile-dropdown">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`mobile-nav-item ${link.active ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                 {link.name}
             </a>
          </li>
         ))}
          </ul>
        </div>
         )}
    </nav>
  );
};
export default Navbar;