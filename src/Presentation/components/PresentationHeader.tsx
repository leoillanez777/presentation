import React from 'react';
import logoImg from '../../assets/logo.png';

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  slideTitle: string;
  slideSubtitle: string;
}

const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  totalSlides,
  slideTitle,
  slideSubtitle
}) => {
  return (
    <div className="header">
      <div className="header-card glass glass-strong glass-hover">
        <div className="header-left">
          <div className="logo glass" style={{ 
            padding: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'transparent'
          }}>
            <img 
              src={logoImg} 
              alt="Excelencia Software" 
              style={{ 
                height: '40px', 
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          <div>
            <h1 className="header-title">{slideTitle}</h1>
            <p className="header-subtitle">{slideSubtitle}</p>
          </div>
        </div>
        <div className="header-right">
          <div className="slide-counter">
            <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
          </div>
          <div className="progress-container glass glass-light">
            <div 
              className="progress-bar" 
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationHeader;