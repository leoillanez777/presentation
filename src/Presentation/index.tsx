import React from 'react';
import PresentationContainer from './components/PresentationContainer';

const Presentation: React.FC = () => {
  // Base styles that need to be included
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      background: linear-gradient(135deg, #eff6ff 0%, #f0fdfa 50%, #f5fbff 100%); /* Medical theme gradient */
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Container */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 32px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
    }

    /* Header */
    .header {
      margin-bottom: 32px;
    }

    .header-card {
      padding: 24px;
      border-radius: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .logo {
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.8), rgba(16, 185, 129, 0.8)); /* Medical Blue-Green */
      color: white;
      padding: 16px;
      border-radius: 16px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .logo-text-1 {
      font-size: 14px;
      font-weight: bold;
    }

    .logo-text-2 {
      font-size: 12px;
    }

    .header-title {
      font-size: 24px;
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 4px;
    }

    .header-subtitle {
      font-size: 18px;
      color: #6b7280;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .slide-counter {
      font-size: 18px;
      font-weight: 600;
      color: #6b7280;
    }

    .progress-container {
      width: 160px;
      height: 12px;
      border-radius: 6px;
      overflow: hidden;
    }

    /* Content */
    .content {
      flex: 1;
      transition: all 0.3s ease;
    }

    .content.transitioning {
      opacity: 0.75;
      transform: scale(0.95);
    }

    /* Navigation */
    .navigation {
      margin-top: 32px;
      padding: 24px;
      border-radius: 16px;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-button {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 32px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 600;
      color: #374151;
      font-size: 16px;
    }

    .nav-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slide-indicators {
      display: flex;
      gap: 12px;
    }

    .slide-indicator {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .slide-indicator.active {
      transform: scale(1.25);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    /* Instructions */
    .instructions {
      position: fixed;
      top: 24px;
      right: 24px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 14px;
      padding: 16px;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 50;
    }

    /* Gradient text */
    .gradient-text {
      background: linear-gradient(135deg, #0ea5e9, #10b981, #06b6d4); /* Medical gradient text */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Icons */
    .icon {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    /* Slides styles */
    .slide {
      display: block;
    }

    .slide-content {
      min-height: 500px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Cover slide styles */
    .hero-section {
      text-align: center;
      margin-bottom: 48px;
    }

    .hero-blur {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(14, 165, 233, 0.2), rgba(16, 185, 129, 0.2)); /* Medical blue-green */
      filter: blur(80px);
    }

    .hero-card {
      position: relative;
      padding: 48px;
      border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .hero-title {
      font-size: 56px;
      font-weight: bold;
      margin-bottom: 24px;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 20px;
      color: #374151;
      max-width: 64rem;
      margin: 0 auto;
      line-height: 1.6;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-bottom: 48px;
    }

    .stat-card {
      padding: 24px;
      border-radius: 16px;
      text-align: center;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .stat-icon {
      width: 32px;
      height: 32px;
      margin: 0 auto 16px;
    }

    .stat-number {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .stat-label {
      font-weight: 500;
      margin-bottom: 8px;
    }

    .stat-detail {
      font-size: 12px;
      margin-top: 8px;
    }

    .value-prop {
      padding: 32px;
      border-radius: 24px;
      text-align: center;
    }

    .value-prop-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      font-size: 20px;
      font-weight: 600;
      color: #374151;
    }

    .sparkle-icon {
      width: 28px;
      height: 28px;
      color: #eab308;
    }

    /* Comparison slide styles */
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      height: 100%;
    }

    .comparison-card {
      padding: 32px;
      border-radius: 24px;
    }

    .comparison-header {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
    }

    .comparison-title {
      font-size: 20px;
      font-weight: bold;
      margin-left: 16px;
    }

    .comparison-items {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .comparison-item {
      padding: 16px;
      border-radius: 12px;
    }

    .comparison-item-header {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    .comparison-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .comparison-item-title {
      font-weight: 600;
    }

    .comparison-item-text {
      font-size: 14px;
      margin-left: 24px;
    }

    /* Organization chart */
    .org-chart {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }

    .ceo-card {
      padding: 32px;
      border-radius: 24px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .ceo-emoji {
      font-size: 32px;
      margin-bottom: 16px;
    }

    .ceo-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .ceo-name {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .ceo-badge {
      font-size: 14px;
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }

    .connector {
      display: flex;
      justify-content: center;
    }

    .connector-line {
      width: 4px;
      height: 64px;
      background: linear-gradient(180deg, #0ea5e9, #10b981); /* Medical connector */
      border-radius: 2px;
    }

    .department-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      width: 100%;
    }

    .department-card {
      padding: 24px;
      border-radius: 16px;
      text-align: center;
      transition: transform 0.3s ease;
      color: white;
    }

    .dept-emoji {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .dept-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .dept-name {
      margin-bottom: 12px;
    }

    .dept-badge {
      font-size: 12px;
      padding: 4px 12px;
      border-radius: 12px;
      margin-bottom: 8px;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .benefit-card {
      padding: 24px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .benefit-icon {
      width: 24px;
      height: 24px;
    }

    .benefit-text {
      font-weight: 600;
    }

    /* Colors */
    .text-red-700 { color: #b91c1c; }
    .text-red-600 { color: #dc2626; }
    .text-green-700 { color: #15803d; }
    .text-green-600 { color: #16a34a; }
    .text-blue-700 { color: #1d4ed8; }
    .text-blue-600 { color: #2563eb; }
    .text-blue-500 { color: #3b82f6; }
    .text-purple-700 { color: #7c3aed; }
    .text-purple-600 { color: #8b5cf6; }
    .text-purple-500 { color: #a855f7; }
    .text-orange-700 { color: #c2410c; }
    .text-orange-600 { color: #ea580c; }
    .text-orange-500 { color: #f97316; }
    .text-green-500 { color: #22c55e; }

    .bg-red-500 { background-color: #ef4444; }
    .bg-green-500 { background-color: #22c55e; }
    .bg-blue-500 { background-color: #3b82f6; }

    .bg-red-gradient {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(234, 88, 12, 0.1));
      border: 1px solid rgba(239, 68, 68, 0.2);
    }

    .bg-green-gradient {
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(5, 150, 105, 0.1));
      border: 1px solid rgba(34, 197, 94, 0.2);
    }

    .bg-blue-gradient {
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(14, 165, 233, 0.3)); /* Medical Blue */
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
    }

    .bg-purple-gradient {
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.3));
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .container {
        padding: 16px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .comparison-grid {
        grid-template-columns: 1fr;
      }

      .department-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .hero-title {
        font-size: 36px;
      }

      .header-card {
        flex-direction: column;
        gap: 16px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <PresentationContainer />
    </>
  );
};

export default Presentation;