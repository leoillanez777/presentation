import React from 'react';
import Slide01Cover from './Slide01Cover';
import Slide02Comparison from './Slide02Comparison';
import Slide03Organization from './Slide03Organization';

// Placeholder components for remaining slides - to be implemented
const Slide04ISO: React.FC = () => (
  <div className="slide-content">
    {/* Header Section */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '32px', 
      textAlign: 'center',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(16, 185, 129, 0.1))',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '24px',
        background: 'linear-gradient(135deg, #10b981, #059669)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
      }}>
        ✅ CERTIFICACIÓN ACTIVA
      </div>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: '#0ea5e9',
        marginBottom: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        🏆 Certificación ISO 9001:2015
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#1e293b',
        maxWidth: '700px',
        margin: '0 auto 16px',
        lineHeight: '1.6'
      }}>
        Implementamos normas de calidad internacional en todos los procesos para asegurar excelencia operativa total.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        marginTop: '20px'
      }}>
        <div style={{
          background: 'rgba(14, 165, 233, 0.1)',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          fontSize: '14px',
          color: '#0ea5e9',
          fontWeight: '600'
        }}>
          📈 +40% Eficiencia Operativa
        </div>
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          fontSize: '14px',
          color: '#10b981',
          fontWeight: '600'
        }}>
          🎯 99.5% Conformidad
        </div>
      </div>
    </div>

    {/* Points Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }}>
      {/* Alineación Directiva */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.1))',
        border: '1px solid rgba(14, 165, 233, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            marginRight: '16px'
          }}>
            🎯
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#0ea5e9',
            margin: 0
          }}>
            Alineación Directiva
          </h3>
        </div>
        <p style={{
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.5',
          margin: 0
        }}>
          Objetivos unificados y mejora continua.
        </p>
      </div>

      {/* Control de Calidad */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            marginRight: '16px'
          }}>
            🤖
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#10b981',
            margin: 0
          }}>
            Control de Calidad
          </h3>
        </div>
        <p style={{
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.5',
          margin: 0
        }}>
          Detección automática de desvíos con IA.
        </p>
      </div>

      {/* Cultura Colaborativa */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(14, 165, 233, 0.1))',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            marginRight: '16px'
          }}>
            🤝
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#06b6d4',
            margin: 0
          }}>
            Cultura Colaborativa
          </h3>
        </div>
        <p style={{
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.5',
          margin: 0
        }}>
          Los errores son oportunidades de mejora.
        </p>
      </div>
    </div>

    {/* Additional Benefits Section */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: '24px', 
      marginTop: '24px' 
    }}>
      {/* Left: Benefits */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.05))',
        border: '1px solid rgba(99, 102, 241, 0.2)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#6366f1',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          💼 Beneficios Empresariales
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#10b981', fontSize: '16px' }}>✓</div>
            <span style={{ fontSize: '14px', color: '#475569' }}>Reducción de costos operativos</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#10b981', fontSize: '16px' }}>✓</div>
            <span style={{ fontSize: '14px', color: '#475569' }}>Mayor satisfacción del cliente</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#10b981', fontSize: '16px' }}>✓</div>
            <span style={{ fontSize: '14px', color: '#475569' }}>Ventaja competitiva sostenible</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#10b981', fontSize: '16px' }}>✓</div>
            <span style={{ fontSize: '14px', color: '#475569' }}>Acceso a mercados internacionales</span>
          </div>
        </div>
      </div>

      {/* Right: Implementation Timeline */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05))',
        border: '1px solid rgba(6, 182, 212, 0.2)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#06b6d4',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          🚀 Próximas Mejoras ISO
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            background: 'rgba(14, 165, 233, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(14, 165, 233, 0.1)'
          }}>
            <div style={{
              background: '#0ea5e9',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>1</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#0ea5e9' }}>Q1 2025</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Portal Digital de Procesos</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            background: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(16, 185, 129, 0.1)'
          }}>
            <div style={{
              background: '#10b981',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>2</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#10b981' }}>Q2 2025</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Automatización de Auditorías</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            background: 'rgba(6, 182, 212, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(6, 182, 212, 0.1)'
          }}>
            <div style={{
              background: '#06b6d4',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>3</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#06b6d4' }}>Q3 2025</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Canal Integrado de Gestión</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide05Automations: React.FC = () => (
  <div className="slide-content">
    {/* Header */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '32px', 
      textAlign: 'center',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: '#6366f1',
        marginBottom: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        🔀 Dos Caminos Ante Nosotros
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#1e293b',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        La decisión que tomemos hoy definirá nuestra cultura y nuestro destino en los años venideros.
      </p>
    </div>

    {/* Two Paths Comparison */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginBottom: '32px'
    }}>
      {/* Path 1: Professionalization */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '32px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
        border: '2px solid rgba(16, 185, 129, 0.3)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '24px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          color: 'white',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
        }}>
          ✅ CAMINO RECOMENDADO
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          marginTop: '12px'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            marginRight: '16px',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
          }}>
            🎯
          </div>
          <div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#10b981',
              margin: 0,
              marginBottom: '4px'
            }}>
              Profesionalización
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#059669',
              margin: 0,
              fontWeight: '600'
            }}>
              Madurez Empresarial
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{
            fontSize: '15px',
            color: '#1e293b',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            Adoptar estructuras de <strong>control, transparencia y responsabilidad financiera</strong> que caracterizan a las empresas serias, sostenibles y preparadas para crecer.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Estructuras de control sólidas',
            'Transparencia financiera total',
            'Responsabilidad por resultados',
            'Sostenibilidad empresarial'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: '#10b981', fontSize: '14px', fontWeight: 'bold' }}>✓</div>
              <span style={{ fontSize: '13px', color: '#374151' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Path 2: Status Quo */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '32px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))',
        border: '2px solid rgba(239, 68, 68, 0.3)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '24px',
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          color: 'white',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
        }}>
          ⚠️ RIESGO CONTINUO
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          marginTop: '12px'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            marginRight: '16px',
            boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)'
          }}>
            🔄
          </div>
          <div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#ef4444',
              margin: 0,
              marginBottom: '4px'
            }}>
              Mismo Sendero
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#dc2626',
              margin: 0,
              fontWeight: '600'
            }}>
              Status Quo
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{
            fontSize: '15px',
            color: '#1e293b',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            Mantener prácticas que, si bien nos han traído hasta aquí, han demostrado ser un <strong>riesgo para nuestra estabilidad</strong>, generando incertidumbre y subsidiando áreas.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Incertidumbre financiera persistente',
            'Subsidios cruzados entre áreas',
            'Falta de accountability',
            'Riesgo de estabilidad'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: '#ef4444', fontSize: '14px', fontWeight: 'bold' }}>✗</div>
              <span style={{ fontSize: '13px', color: '#374151' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="glass glass-strong glass-hover" style={{
      padding: '28px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
      border: '1px solid rgba(14, 165, 233, 0.3)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0ea5e9',
        marginBottom: '12px'
      }}>
        🚀 Nuestra Propuesta
      </h3>
      <p style={{
        fontSize: '16px',
        color: '#1e293b',
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        Esta contrapropuesta está diseñada para guiarnos por el <strong>camino de la profesionalización</strong>. 
        Es la ruta hacia la madurez empresarial, donde cada unidad de negocio demuestra su propio valor 
        y contribuye de forma transparente al éxito común.
      </p>
    </div>
  </div>
);

const Slide06Impact: React.FC = () => (
  <div className="slide-content">
    {/* Header */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '32px', 
      textAlign: 'center',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: '#10b981',
        marginBottom: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        📈 Impacto Operativo Inmediato
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#1e293b',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Resultados cuantificables desde el primer mes de implementación de la profesionalización.
      </p>
    </div>

    {/* Key Metrics Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    }}>
      {/* Efficiency Metric */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
        border: '1px solid rgba(14, 165, 233, 0.3)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)'
        }}>
          ⚡
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#0ea5e9',
          marginBottom: '8px'
        }}>
          +45%
        </div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '8px'
        }}>
          Eficiencia Operativa
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Reducción en tiempos de proceso y toma de decisiones
        </p>
      </div>

      {/* Code Quality */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
        }}>
          🔧
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#10b981',
          marginBottom: '8px'
        }}>
          -80%
        </div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '8px'
        }}>
          Bugs en Producción
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Mejores prácticas y procesos de calidad
        </p>
      </div>

      {/* Transparency Score */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.05))',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #6366f1, #818cf8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)'
        }}>
          🎯
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#6366f1',
          marginBottom: '8px'
        }}>
          95%
        </div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '8px'
        }}>
          Transparencia
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Visibilidad total en métricas y responsabilidades
        </p>
      </div>

      {/* Decision Speed */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
        }}>
          🚀
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#8b5cf6',
          marginBottom: '8px'
        }}>
          3x
        </div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '8px'
        }}>
          Velocidad Decisiones
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Estructuras claras aceleran la toma de decisiones
        </p>
      </div>
    </div>

    {/* Bottom Section: Before vs After */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    }}>
      {/* Before */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(220, 38, 38, 0.03))',
        border: '1px solid rgba(239, 68, 68, 0.2)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#ef4444',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ❌ Situación Actual
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            'Decisiones lentas por falta de claridad',
            'Procesos manuales y repetitivos',
            'Accountability diluida entre áreas',
            'Métricas inconsistentes y dispersas'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '2px' }}>●</div>
              <span style={{ fontSize: '14px', color: '#374151', lineHeight: '1.4' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.03))',
        border: '1px solid rgba(16, 185, 129, 0.2)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#10b981',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ✅ Con Profesionalización
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            'Decisiones ágiles con estructuras claras',
            'Procesos automatizados y optimizados',
            'Responsabilidad definida y medible',
            'Dashboard unificado de métricas'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <div style={{ color: '#10b981', fontSize: '12px', marginTop: '2px' }}>●</div>
              <span style={{ fontSize: '14px', color: '#374151', lineHeight: '1.4' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide07Roadmap: React.FC = () => (
  <div className="slide-content">
    {/* Header */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '32px', 
      textAlign: 'center',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05))'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: '#06b6d4',
        marginBottom: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        📅 Roadmap de Transformación
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#1e293b',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Transformación operativa y tecnológica en 6 meses con el liderazgo del CTO.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginTop: '20px'
      }}>
        <div style={{
          background: 'rgba(6, 182, 212, 0.1)',
          padding: '6px 12px',
          borderRadius: '16px',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          fontSize: '12px',
          color: '#06b6d4',
          fontWeight: '600'
        }}>
          🚀 INICIO: Agosto 2025
        </div>
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          padding: '6px 12px',
          borderRadius: '16px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          fontSize: '12px',
          color: '#10b981',
          fontWeight: '600'
        }}>
          🎯 META: Febrero 2026
        </div>
      </div>
    </div>

    {/* Timeline */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '32px'
    }}>
      {/* Phase 1 */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '20px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '80px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
            marginBottom: '8px'
          }}>
            1
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#0ea5e9',
            textAlign: 'center'
          }}>
            MES 1-2
          </div>
        </div>
        <div className="glass glass-strong glass-hover" style={{
          flex: 1,
          padding: '24px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
          border: '1px solid rgba(14, 165, 233, 0.3)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#0ea5e9',
            marginBottom: '12px'
          }}>
            💻 Fase 1: Tecnológica
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Infraestructura Tecnológica:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Implementar herramientas de desarrollo</li>
                <li>Configurar entornos de trabajo</li>
                <li>Establecer pipeline CI/CD</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Definición de Roles:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Responsabilidades técnicas claras</li>
                <li>Estructura del equipo de desarrollo</li>
                <li>Líneas de reporte tecnológico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '20px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '80px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
            marginBottom: '8px'
          }}>
            2
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#10b981',
            textAlign: 'center'
          }}>
            MES 3-4
          </div>
        </div>
        <div className="glass glass-strong glass-hover" style={{
          flex: 1,
          padding: '24px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#10b981',
            marginBottom: '12px'
          }}>
            📄 Fase 2: Procesos
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Documentación de Procesos:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Crear manuales técnicos detallados</li>
                <li>Documentar flujos de desarrollo</li>
                <li>Establecer guías de buenas prácticas</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Herramientas Definidas:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Stack tecnológico estandarizado</li>
                <li>Herramientas de gestión de proyectos</li>
                <li>Plataformas de colaboración</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '20px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '80px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
            marginBottom: '8px'
          }}>
            3
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#8b5cf6',
            textAlign: 'center'
          }}>
            MES 5-6
          </div>
        </div>
        <div className="glass glass-strong glass-hover" style={{
          flex: 1,
          padding: '24px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#8b5cf6',
            marginBottom: '12px'
          }}>
            ⚙️ Fase 3: Optimización
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Automatización:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Automatizar procesos repetitivos</li>
                <li>Implementar monitoreo continuo</li>
                <li>Optimizar workflows existentes</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Escalabilidad:</h4>
              <ul style={{ fontSize: '13px', color: '#64748b', margin: 0, paddingLeft: '16px' }}>
                <li>Arquitectura escalable</li>
                <li>Procesos replicables</li>
                <li>Capacitación continua del equipo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Success Metrics */}
    <div className="glass glass-strong glass-hover" style={{
      padding: '24px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.05))',
      border: '1px solid rgba(99, 102, 241, 0.3)'
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#6366f1',
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        📊 Métricas de Impacto Tecnológico
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0ea5e9', marginBottom: '4px' }}>100%</div>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Procesos Documentados</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginBottom: '4px' }}>-50%</div>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Tiempo de Desarrollo</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '4px' }}>+75%</div>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Productividad del Equipo</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#6366f1', marginBottom: '4px' }}>95%</div>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Automatización de Procesos</div>
        </div>
      </div>
    </div>
  </div>
);

const Slide08Decisions: React.FC = () => (
  <div className="slide-content">
    {/* Header */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '32px', 
      textAlign: 'center',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(234, 88, 12, 0.05))'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: '#f97316',
        marginBottom: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        ☀️ Nuevo Horario de Verano
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#1e293b',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Implementación del horario de verano para optimizar productividad y bienestar del equipo.
      </p>
    </div>

    {/* Main Announcement */}
    <div className="glass glass-strong glass-hover" style={{
      padding: '40px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.1))',
      border: '2px solid rgba(249, 115, 22, 0.3)',
      textAlign: 'center',
      marginBottom: '32px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #f97316, #ea580c)',
        color: 'white',
        padding: '8px 24px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)'
      }}>
        🗓️ VIGENTE DESDE
      </div>

      <div style={{ marginTop: '12px', marginBottom: '24px' }}>
        <div style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#f97316',
          marginBottom: '8px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          LUNES 18
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#ea580c',
          marginBottom: '16px'
        }}>
          AGOSTO 2025
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 24px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <div style={{
            fontSize: '32px',
            color: '#16a34a'
          }}>
            🌅
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#16a34a' }}>07:00</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Inicio</div>
          </div>
        </div>

        <div style={{
          fontSize: '24px',
          color: '#64748b'
        }}>
          ➡️
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 24px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <div style={{
            fontSize: '32px',
            color: '#dc2626'
          }}>
            🌆
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc2626' }}>14:00</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Fin</div>
          </div>
        </div>
      </div>

      <div style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#1e293b',
        padding: '12px 24px',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.4)'
      }}>
        📊 Total: 7 horas de trabajo efectivo
      </div>
    </div>

    {/* Benefits Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px'
    }}>
      {/* Benefit 1 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
        }}>
          💪
        </div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#10b981',
          marginBottom: '8px'
        }}>
          Mayor Productividad
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Aprovechamiento de horas matutinas con mayor concentración
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
        border: '1px solid rgba(14, 165, 233, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)'
        }}>
          ⚖️
        </div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#0ea5e9',
          marginBottom: '8px'
        }}>
          Balance Vida-Trabajo
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Tardes libres para actividades personales y familiares
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '0 auto 16px',
          boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)'
        }}>
          🌡️
        </div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#8b5cf6',
          marginBottom: '8px'
        }}>
          Clima Favorable
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          lineHeight: '1.4'
        }}>
          Evitar las horas de mayor calor durante el verano
        </p>
      </div>
    </div>
  </div>
);

const Slide09Conclusion: React.FC = () => (
  <div className="slide-content">
    {/* Hero Section */}
    <div className="glass glass-strong glass-hover" style={{ 
      padding: '48px', 
      textAlign: 'center',
      marginBottom: '32px',
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1))',
      border: '2px solid rgba(14, 165, 233, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
        animation: 'pulse 4s ease-in-out infinite',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontSize: '64px',
          marginBottom: '16px'
        }}>
          🚀
        </div>
        
        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #0ea5e9, #10b981, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '24px',
          textShadow: 'none'
        }}>
          Excelencia Software 2.0
        </h2>
        
        <p style={{ 
          fontSize: '20px', 
          color: '#1e293b',
          maxWidth: '700px',
          margin: '0 auto 32px',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          El futuro de nuestra empresa comienza hoy. Con procesos claros, tecnología de punta 
          y un equipo empoderado, estamos listos para liderar la transformación digital.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(14, 165, 233, 0.1)',
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            fontSize: '14px',
            color: '#0ea5e9',
            fontWeight: '600'
          }}>
            💻 Tecnología
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontSize: '14px',
            color: '#10b981',
            fontWeight: '600'
          }}>
            📋 Procesos
          </div>
          <div style={{
            background: 'rgba(99, 102, 241, 0.1)',
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            fontSize: '14px',
            color: '#6366f1',
            fontWeight: '600'
          }}>
            👥 Equipo
          </div>
          <div style={{
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '8px 20px',
            borderRadius: '20px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            fontSize: '14px',
            color: '#8b5cf6',
            fontWeight: '600'
          }}>
            🎯 Resultados
          </div>
        </div>
      </div>
    </div>

    {/* Key Messages Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    }}>
      {/* Message 1 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '32px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
        border: '1px solid rgba(14, 165, 233, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '16px'
        }}>
          🎯
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#0ea5e9',
          marginBottom: '12px'
        }}>
          Visión Clara
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#64748b',
          lineHeight: '1.5'
        }}>
          Sabemos hacia dónde vamos y cómo llegar. El roadmap está trazado 
          y cada paso nos acerca a la excelencia operativa.
        </p>
      </div>

      {/* Message 2 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '32px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '16px'
        }}>
          ⚡
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#10b981',
          marginBottom: '12px'
        }}>
          Acción Inmediata
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#64748b',
          lineHeight: '1.5'
        }}>
          No esperamos al mañana. Comenzamos desde agosto 2025 con cambios 
          concretos que generarán impacto desde el primer día.
        </p>
      </div>

      {/* Message 3 */}
      <div className="glass glass-strong glass-hover" style={{
        padding: '32px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.05))',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '16px'
        }}>
          🏆
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#6366f1',
          marginBottom: '12px'
        }}>
          Excelencia Sostenible
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#64748b',
          lineHeight: '1.5'
        }}>
          Construimos para el largo plazo. Cada proceso, cada herramienta, 
          cada decisión está pensada para crecer y evolucionar.
        </p>
      </div>
    </div>

    {/* Final Call to Action */}
    <div className="glass glass-strong glass-hover" style={{
      padding: '40px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.1))',
      border: '2px solid rgba(139, 92, 246, 0.3)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#8b5cf6',
        marginBottom: '16px'
      }}>
        💪 Juntos hacia la Transformación
      </h3>
      <p style={{
        fontSize: '18px',
        color: '#1e293b',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 24px'
      }}>
        Este es nuestro momento. Tenemos el equipo, la visión y la determinación 
        para convertirnos en líderes tecnológicos de nuestro sector.
      </p>
      
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}>
        <span>🚀</span>
        <span>¡Comencemos la Transformación!</span>
      </div>
    </div>
  </div>
);

export const slideComponents = [
  Slide01Cover,
  Slide02Comparison,
  Slide03Organization,
  Slide04ISO,
  Slide05Automations,
  Slide06Impact,
  Slide07Roadmap,
  Slide08Decisions,
  Slide09Conclusion,
];

export {
  Slide01Cover,
  Slide02Comparison,
  Slide03Organization,
  Slide04ISO,
  Slide05Automations,
  Slide06Impact,
  Slide07Roadmap,
  Slide08Decisions,
  Slide09Conclusion,
};