import React, { useState, useEffect } from 'react';
import TechCard from './TechCard';
import YourStack from './YourStack';
import './TechnologiesSection.css';
import { toast } from 'react-toastify';

const TechnologiesSection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technologies');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyInStack = stack.some((item) => item.id === tech.id);

    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${itemToRemove?.name || 'Item'} removed from stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies removed from stack.');
  };

  return (
    <section className="tech-section" id="technologies">
      <div className="tech-section-container">
        
        <div className="tech-section-header">
          <h2 className="tech-section-title">
            Explore the <span className="highlight-text">Technologies</span>
          </h2>
          <p className="tech-section-subtitle">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="tech-layout">
          
          <div className="tech-grid-wrapper">
            {loading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading technologies...</p>
              </div>
            ) : (
              <div className="tech-grid">
                {technologies.map((tech) => {
                  const isSelected = stack.some((item) => item.id === tech.id);
                  return (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAddToStack={handleAddToStack}
                      isSelected={isSelected}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className="tech-sidebar-wrapper">
            <YourStack
              stack={stack}
              onRemoveItem={handleRemoveItem}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;