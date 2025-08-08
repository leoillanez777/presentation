import React from 'react';

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPreviousSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}

const PresentationNavigation: React.FC<PresentationNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPreviousSlide,
  onNextSlide,
  onGoToSlide
}) => {
  return (
    <div className="navigation">
      <div className="navigation-card glass glass-strong glass-hover">
        <div className="nav-container">
          <button 
            className="nav-button glass glass-hover" 
            onClick={onPreviousSlide}
            disabled={currentSlide === 0}
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Anterior
          </button>

          <div className="slide-indicators">
            {Array.from({ length: totalSlides }, (_, index) => (
              <div
                key={index}
                className={`slide-indicator glass ${index === currentSlide ? 'active' : ''}`}
                onClick={() => onGoToSlide(index)}
                style={{
                  background: index === currentSlide 
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                    : undefined
                }}
              />
            ))}
          </div>

          <button 
            className="nav-button primary glass glass-hover" 
            onClick={onNextSlide}
            disabled={currentSlide === totalSlides - 1}
            style={{
              background: currentSlide !== totalSlides - 1 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8))'
                : undefined
            }}
          >
            Siguiente
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationNavigation;