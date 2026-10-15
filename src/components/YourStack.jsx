import React from 'react';
import { X } from 'lucide-react';
import './YourStack.css';
const YourStack = ({ stack, onRemoveItem, onRemoveAll }) => {
  const count = stack.length;
  return (
    <aside className="your-stack-card">
      <div className="your-stack-header">
        <h3 className="your-stack-title">Your Stack</h3>
        <span className="your-stack-count">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
        </span>
      </div>
      {count === 0 ? (
        <div className="stack-empty-box">
          <p className="stack-empty-text">Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-list-wrapper">
          <ul className="stack-items-list">
            {stack.map((item) => (
              <li key={item.id} className="stack-item">
                <div className="stack-item-left">
                  <div className="stack-item-icon-box">
                    <img src={item.icon} alt={item.name} className="stack-item-icon" />
                  </div>
                  <div className="stack-item-info">
                    <h4 className="stack-item-name">{item.name}</h4>
                    <span className="stack-item-category">{item.category}</span>
                  </div>
                </div>
                <button
                  className="btn-remove-item"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
          <button className="btn-remove-all" onClick={onRemoveAll}>
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};
export default YourStack;