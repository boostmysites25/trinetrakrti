import React, { useEffect, useRef } from 'react';

const AIGradientBackground = ({ children, className = "" }) => {
  const gradientRef = useRef(null);
  
  useEffect(() => {
    const gradientElement = gradientRef.current;
    if (!gradientElement) return;
    
    let x = 0;
    let y = 0;
    
    const handleMouseMove = (e) => {
      const rect = gradientElement.getBoundingClientRect();
      x = (e.clientX - rect.left) / rect.width;
      y = (e.clientY - rect.top) / rect.height;
      
      // Update gradient position based on mouse
      gradientElement.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%, 
          rgba(187, 168, 78, 0.05) 0%, 
          rgba(220, 223, 224, 0.05) 50%, 
          rgba(255, 255, 255, 0) 80%
        ),
        radial-gradient(
          circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, 
          rgba(220, 223, 224, 0.05) 0%, 
          rgba(187, 168, 78, 0.05) 50%, 
          rgba(255, 255, 255, 0) 80%
        ),
        linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.95) 100%
        )
      `;
    };
    
    // Set initial gradient
    gradientElement.style.background = `
      radial-gradient(
        circle at 50% 50%, 
        rgba(187, 168, 78, 0.05) 0%, 
        rgba(220, 223, 224, 0.05) 50%, 
        rgba(255, 255, 255, 0) 80%
      ),
      radial-gradient(
        circle at 50% 50%, 
        rgba(220, 223, 224, 0.05) 0%, 
        rgba(187, 168, 78, 0.05) 50%, 
        rgba(255, 255, 255, 0) 80%
      ),
      linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.95) 100%
      )
    `;
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={gradientRef} className={`${className}`}>
      {children}
    </div>
  );
};

export default AIGradientBackground;