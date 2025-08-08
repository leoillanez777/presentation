import React, { useState, useEffect, useCallback } from 'react';
import BackgroundEffects from './BackgroundEffects';
import PresentationHeader from './PresentationHeader';
import PresentationNavigation from './PresentationNavigation';
import { slideComponents } from '../slides';
import '../styles/glassmorphism.css';

const PresentationContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 9;

  // Slide data
  const slides = [
    {
      title: "🏗️ ESTRUCTURA PARA LA INNOVACIÓN",
      subtitle: "Organización y liderazgo para el crecimiento sostenible"
    },
    {
      title: "🔄 SITUACIÓN ACTUAL VS TRANSFORMACIÓN CTO",
      subtitle: "Mejoras operativas y tecnológicas bajo liderazgo técnico"
    },
    {
      title: "🏢 ESTRUCTURA ORGANIZACIONAL",
      subtitle: "Equipo directivo y distribución de responsabilidades"
    },
    {
      title: "🏆 CERTIFICACIÓN ISO 9001:2015",
      subtitle: "Calidad internacional con mejoras operativas continuas"
    },
    {
      title: "🔀 DOS CAMINOS ANTE NOSOTROS",
      subtitle: "Profesionalización vs Status Quo - La decisión estratégica"
    },
    {
      title: "📈 IMPACTO OPERATIVO INMEDIATO",
      subtitle: "Resultados cuantificables de la transformación tecnológica"
    },
    {
      title: "📅 ROADMAP DE TRANSFORMACIÓN",
      subtitle: "6 meses de evolución tecnológica (Agosto 2025 - Febrero 2026)"
    },
    {
      title: "☀️ NUEVO HORARIO DE VERANO",
      subtitle: "07:00 - 14:00 hrs desde el lunes 18 de agosto 2025"
    },
    {
      title: "🚀 EXCELENCIA SOFTWARE 2.0",
      subtitle: "Juntos hacia la transformación tecnológica"
    }
  ];

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentSlide && !isTransitioning && index >= 0 && index < totalSlides) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      } else if (e.key >= '1' && e.key <= '9') {
        const slideIndex = parseInt(e.key) - 1;
        if (slideIndex < totalSlides) {
          goToSlide(slideIndex);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  // Render current slide component
  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <>
      <BackgroundEffects />

      {/* Instructions */}
      <div className="instructions">
        ← → Navegar | Espacio: Siguiente | 1-9: Ir a slide
      </div>

      <div className="container">
        <PresentationHeader
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          slideTitle={slides[currentSlide].title}
          slideSubtitle={slides[currentSlide].subtitle}
        />

        <div className={`content ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="slide active">
            <CurrentSlideComponent />
          </div>
        </div>

        <PresentationNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPreviousSlide={previousSlide}
          onNextSlide={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </>
  );
};

export default PresentationContainer;
