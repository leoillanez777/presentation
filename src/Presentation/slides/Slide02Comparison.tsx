import React from 'react';

const Slide02Comparison: React.FC = () => {
  return (
    <div className="slide-content">
      <div className="comparison-grid">
        <div className="comparison-card glass glass-strong glass-hover bg-red-gradient">
          <div className="comparison-header">
            <svg style={{ color: '#dc2626', width: '36px', height: '36px' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM8.5 7H15.5C16.6 7 17.5 7.9 17.5 9V22H15.5V16H12.5V22H10.5V16H8.5V9C8.5 7.9 9.4 7 8.5 7Z"/>
            </svg>
            <h3 className="comparison-title text-red-700">SITUACIÓN ACTUAL</h3>
          </div>
          
          <div className="comparison-items">
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-red-500"></div>
                <span className="comparison-item-title text-red-700">Procesos No Documentados</span>
              </div>
              <p className="comparison-item-text text-red-600">Conocimiento disperso, falta de manuales</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-red-500"></div>
                <span className="comparison-item-title text-red-700">Herramientas Dispersas</span>
              </div>
              <p className="comparison-item-text text-red-600">WhatsApp, Excel, emails sin integración</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-red-500"></div>
                <span className="comparison-item-title text-red-700">Responsabilidades Confusas</span>
              </div>
              <p className="comparison-item-text text-red-600">Roles superpuestos, falta de ownership</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-red-500"></div>
                <span className="comparison-item-title text-red-700">Desarrollo Ad-hoc</span>
              </div>
              <p className="comparison-item-text text-red-600">Sin metodologías, procesos improvisados</p>
            </div>
          </div>
        </div>
        
        <div className="comparison-card glass glass-strong glass-hover bg-green-gradient">
          <div className="comparison-header">
            <svg style={{ color: '#16a34a', width: '36px', height: '36px' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <h3 className="comparison-title text-green-700">TRANSFORMACIÓN CTO</h3>
          </div>
          
          <div className="comparison-items">
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-green-500"></div>
                <span className="comparison-item-title text-green-700">Procesos Documentados</span>
              </div>
              <p className="comparison-item-text text-green-600">Manuales técnicos, guías de buenas prácticas</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-green-500"></div>
                <span className="comparison-item-title text-green-700">Stack Tecnológico Unificado</span>
              </div>
              <p className="comparison-item-text text-green-600">Herramientas integradas, pipeline CI/CD</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-green-500"></div>
                <span className="comparison-item-title text-green-700">Roles y Responsabilidades Claras</span>
              </div>
              <p className="comparison-item-text text-green-600">Ownership definido, líneas de reporte claras</p>
            </div>
            
            <div className="comparison-item glass-card glass-hover">
              <div className="comparison-item-header">
                <div className="comparison-dot bg-green-500"></div>
                <span className="comparison-item-title text-green-700">Metodologías Ágiles</span>
              </div>
              <p className="comparison-item-text text-green-600">Scrum, Code Review, automatización de testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide02Comparison;