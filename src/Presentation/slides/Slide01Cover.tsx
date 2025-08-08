import React from 'react';

const Slide01Cover: React.FC = () => {
  const leadership = [
    { name: 'Jorge Illanez', role: 'CEO', details: 'Liderazgo ejecutivo y gestión estratégica de las áreas de negocio (Administración, Comercial, Financiera). Gestión de KPIs clave.' },
    { name: 'Leonardo Illanez', role: 'CTO', details: 'Define la visión y el roadmap tecnológico. Lidera el equipo de desarrollo para garantizar escalabilidad y performance.' },
    { name: 'Virginia Tello', role: 'COO / Calidad', details: 'Vela por el cumplimiento de estándares de calidad en procesos y productos. Gestiona la Mesa de Ayuda y el conocimiento interno.' },
    { name: 'Sebastián Illanez', role: 'Marketing + AI', details: 'Dirige el área de IT, infraestructura, y coordina el desarrollo ágil como Management Scrum. Soporte de hardware.' },
  ];

  return (
    <div className="slide-content">
      {/* Hero Section */}
      <div className="hero-section">
        <div style={{ position: 'relative' }}>
          <div className="hero-blur"></div>
          <div className="hero-card glass glass-strong glass-hover">
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              color: '#1e293b',
              lineHeight: '1.2',
              marginBottom: '24px'
            }}>
              Estructura para la{' '}
              <span style={{ color: '#0ea5e9' }}>Innovación</span>{' '}
              y el{' '}
              <span style={{ color: '#10b981' }}>Crecimiento</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#64748b',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Analizamos nuestra organización para construir el futuro. Esta es la historia de nuestra evolución: 
              de una base sólida a una visión estratégica impulsada por la tecnología y la excelencia.
            </p>
          </div>
        </div>
      </div>

      {/* Pilares Section */}
      <div style={{ marginTop: '48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '8px'
          }}>
            Nuestros Pilares
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b'
          }}>
            El equipo directivo que combina experiencia y visión para guiar nuestra transformación.
          </p>
        </div>

        {/* Leadership Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="glass glass-strong glass-hover"
              style={{
                padding: '24px',
                borderRadius: '16px',
                textAlign: 'center',
                background: index === 0 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                  : index === 1
                  ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(5, 150, 105, 0.1))'
                  : index === 2
                  ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(126, 34, 206, 0.1))'
                  : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Avatar/Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                background: index === 0 
                  ? 'linear-gradient(135deg, #0ea5e9, #06b6d4)' /* Medical Blue */
                  : index === 1
                  ? 'linear-gradient(135deg, #10b981, #059669)' /* Medical Green */
                  : index === 2
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' /* Medical Indigo */
                  : 'linear-gradient(135deg, #06b6d4, #0ea5e9)', /* Medical Cyan */
                color: 'white'
              }}>
                {index === 0 ? '👨‍💼' : index === 1 ? '👨‍💻' : index === 2 ? '⚙️' : '🧠'}
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '8px'
              }}>
                {leader.name}
              </h3>

              {/* Role */}
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: index === 0 ? '#0ea5e9' : index === 1 ? '#10b981' : index === 2 ? '#6366f1' : '#06b6d4', /* Medical colors */
                marginBottom: '12px',
                padding: '4px 12px',
                borderRadius: '12px',
                background: index === 0 
                  ? 'rgba(59, 130, 246, 0.1)'
                  : index === 1
                  ? 'rgba(34, 197, 94, 0.1)'
                  : index === 2
                  ? 'rgba(147, 51, 234, 0.1)'
                  : 'rgba(236, 72, 153, 0.1)',
                display: 'inline-block'
              }}>
                {leader.role}
              </div>

              {/* Details */}
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.5'
              }}>
                {leader.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;