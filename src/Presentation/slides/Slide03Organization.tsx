import React from 'react';

const Slide03Organization: React.FC = () => {
  return (
    <div className="slide-content">
      <div className="org-chart">
        <div className="ceo-card glass glass-strong glass-hover bg-blue-gradient">
          <div className="ceo-emoji">👨‍💼</div>
          <div className="ceo-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>CEO + CFO</div>
          <div className="ceo-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Jorge Illanez</div>
          <div className="ceo-badge" style={{ background: 'rgba(30, 58, 138, 0.3)' }}>
            ✨ Solo estrategia + finanzas
          </div>
        </div>

        <div className="connector">
          <div className="connector-line"></div>
        </div>

        <div className="department-grid">
          <div className="department-card glass glass-hover" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.3))' }}>
            <div className="dept-emoji">💼</div>
            <div className="dept-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Head Comercial</div>
            <div className="dept-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Sebastián Illanez</div>
            <div className="dept-badge" style={{ 
              background: 'rgba(14, 165, 233, 0.4)', 
              border: '1px solid rgba(14, 165, 233, 0.5)' 
            }}>
              💼 Ventas + Gestión
            </div>
          </div>

          <div className="department-card glass glass-hover" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.3))' }}>
            <div className="dept-emoji">💻</div>
            <div className="dept-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>CTO</div>
            <div className="dept-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Leonardo Illanez</div>
            <div className="dept-badge" style={{ 
              background: 'rgba(16, 185, 129, 0.4)', 
              border: '1px solid rgba(16, 185, 129, 0.5)' 
            }}>
              👥 16 personas
            </div>
          </div>

          <div className="department-card glass glass-hover" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.3))' }}>
            <div className="dept-emoji">⚙️</div>
            <div className="dept-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>COO</div>
            <div className="dept-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Virginia Tello</div>
            <div className="dept-badge" style={{ 
              background: 'rgba(139, 92, 246, 0.4)', 
              border: '1px solid rgba(139, 92, 246, 0.5)' 
            }}>
              📊 Control + Métricas
            </div>
          </div>

          <div className="department-card glass glass-hover" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(129, 140, 248, 0.3))' }}>
            <div className="dept-emoji">🧠</div>
            <div className="dept-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Marketing + AI</div>
            <div className="dept-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Jorge Illanez</div>
            <div className="dept-badge" style={{ 
              background: 'rgba(99, 102, 241, 0.4)', 
              border: '1px solid rgba(99, 102, 241, 0.5)' 
            }}>
              🤖 IA Automatizada
            </div>
          </div>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card glass glass-strong glass-hover" style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <svg className="benefit-icon text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
            <span className="benefit-text text-blue-700">Solo 4 reportes directos al CEO</span>
          </div>
          
          <div className="benefit-card glass glass-strong glass-hover" style={{
            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <svg className="benefit-icon text-purple-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.5,2L8.5,5.5L5,6.5L8.5,7.5L9.5,11L10.5,7.5L14,6.5L10.5,5.5L9.5,2ZM20,15.5L19,17L17.5,18L19,19L20,20.5L21,19L22.5,18L21,17L20,15.5Z"/>
            </svg>
            <span className="benefit-text text-purple-700">IA integrada desde el diseño</span>
          </div>
          
          <div className="benefit-card glass glass-strong glass-hover" style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(5, 150, 105, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <svg className="benefit-icon text-green-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
            </svg>
            <span className="benefit-text text-green-700">Especialización máxima por área</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03Organization;