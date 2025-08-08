import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Enhanced Glassmorphism Background Elements */}
      <div className="bg-element bg-element-1"></div>
      <div className="bg-element bg-element-2"></div>
      <div className="bg-element bg-element-3"></div>
      <div className="bg-element bg-element-4"></div>
      <div className="bg-element bg-element-5"></div>
      <div className="bg-element bg-element-6"></div>
      
      {/* Floating particles for enhanced glassmorphism */}
      <div className="floating-particles">
        {Array.from({ length: 20 }, (_, index) => (
          <div 
            key={index} 
            className={`particle particle-${index + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="gradient-overlay"></div>
    </>
  );
};

export default BackgroundEffects;