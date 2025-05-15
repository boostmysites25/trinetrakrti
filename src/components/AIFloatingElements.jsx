import React, { useEffect, useRef } from 'react';

const AIFloatingElements = ({ count = 10, className = "" }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing elements
    container.innerHTML = '';
    
    // Create floating elements
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      
      // Randomize properties
      const size = Math.random() * 30 + 10; // 10-40px
      const isCircle = Math.random() > 0.5;
      const isGold = Math.random() > 0.5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 10; // 10-30s
      const delay = Math.random() * 5;
      
      // Set styles
      element.style.position = 'absolute';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.borderRadius = isCircle ? '50%' : '0';
      element.style.border = `1px solid ${isGold ? '#BBA84E20' : '#DCDFE020'}`;
      element.style.left = `${posX}%`;
      element.style.top = `${posY}%`;
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      element.style.opacity = '0.2';
      element.style.transform = isCircle ? 'rotate(0deg)' : 'rotate(45deg)';
      
      // Add special elements
      if (Math.random() > 0.8) {
        // Create a circuit-like pattern
        element.style.backgroundImage = `
          radial-gradient(circle at center, ${isGold ? '#BBA84E10' : '#DCDFE010'} 0%, transparent 70%),
          linear-gradient(to right, transparent 49%, ${isGold ? '#BBA84E20' : '#DCDFE020'} 50%, transparent 51%)
        `;
        element.style.backgroundSize = '100% 100%, 10px 10px';
      }
      
      container.appendChild(element);
    }
    
    // Add a few hexagons
    for (let i = 0; i < Math.min(count / 5, 3); i++) {
      const hexagon = document.createElement('div');
      
      // Randomize properties
      const size = Math.random() * 40 + 20; // 20-60px
      const isGold = Math.random() > 0.5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 15; // 15-35s
      const delay = Math.random() * 5;
      
      // Set styles
      hexagon.style.position = 'absolute';
      hexagon.style.width = `${size}px`;
      hexagon.style.height = `${size}px`;
      hexagon.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
      hexagon.style.border = `1px solid ${isGold ? '#BBA84E30' : '#DCDFE030'}`;
      hexagon.style.left = `${posX}%`;
      hexagon.style.top = `${posY}%`;
      hexagon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, rotate ${duration * 2}s linear ${delay}s infinite`;
      hexagon.style.opacity = '0.15';
      
      container.appendChild(hexagon);
    }
    
  }, [count]);
  
  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}></div>
  );
};

export default AIFloatingElements;