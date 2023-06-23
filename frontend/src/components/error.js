import React from 'react';
import './error.css';

const error = () => {
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      const errorMessageStyle = {
        color: generateRandomColor()
      };
    
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-heading" color='red'>404</h1>
        <p className="error-message" style={errorMessageStyle}>
          Sorry, we are unavailable or something is missing.<br />
          Maybe it will be back soon.
        </p>
      </div>
    </div>
  );
};

export default error;
