import { Footer } from '../components/Footer.js';

export function AboutPage() {
  return `
    <div class="page active">
      <div class="page-about">
        <div class="about-hero">
          <h1>Cosmic Garden</h1>
          <p class="subtitle">
            Un espacio donde la naturaleza encontra la inmensidad del cosmos.
          </p>
        </div>
        
        <div class="about-cards">
          <div class="about-card">
            <div class="card-icon">🌸</div>
            <h3>Flores Animadas</h3>
            <p>Cada flor cobra vida con animaciones suaves que simulan el movimiento natural.</p>
          </div>
          
          <div class="about-card">
            <div class="card-icon">🌌</div>
            <h3>Fondo Estelar</h3>
            <p>Un cielo nocturno dinámico con galaxias, nebulosas y estrellas fugaces.</p>
          </div>
          
          <div class="about-card">
            <div class="card-icon">🎵</div>
            <h3>Música Personal</h3>
            <p>Añade tu propia música para crear la atmósfera perfecta.</p>
          </div>
        </div>
        
        <div class="about-features">
          <div class="feature">
            <span class="feature-badge">Responsive</span>
            <span class="feature-badge">SPA</span>
            <span class="feature-badge">CSS Animations</span>
          </div>
        </div>
        
        ${Footer()}
      </div>
    </div>
  `;
}
