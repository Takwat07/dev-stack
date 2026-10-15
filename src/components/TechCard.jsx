import React from 'react';
import './TechCard.css';
const TechCard = ({ tech, onAddToStack, isSelected }) => {
  return (
    <div className="tech-card">
      <div className="tech-card-header">
        <div className="tech-icon-wrapper">
          <img src={tech.icon} alt={tech.name} className="tech-icon" />
        </div>
        <span className={`tech-badge badge-${tech.badge.toLowerCase().replace(/[^a-z]/g, '')}`}>
          {tech.badge}
        </span>
      </div>
      <h3 className="tech-name">{tech.name}</h3>
      <p className="tech-description">{tech.description}</p>
      <div className="tech-meta">
        <span className="meta-chip chip-category">{tech.category}</span>
        <span className="meta-chip chip-difficulty">{tech.difficulty}</span>
        <span className="meta-rating">
          <span className="star-icon">★</span>
          <span>{tech.rating}</span>
        </span>
      </div>
      <button
        className={`btn-add-stack ${isSelected ? 'added' : ''}`}
        onClick={() => onAddToStack(tech)}
        disabled={isSelected}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};
export default TechCard;