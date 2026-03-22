export function LandingPage() {
  return `
    <div class="page landing-page active">
      <div class="landing-bg"></div>
      <div class="landing-content">
        <h1 class="landing-title">Cosmic Garden</h1>
        <p class="landing-subtitle">Un jardín de flores bajo el cosmos</p>
        <button class="landing-btn" data-route="home">
          <span>Entrar al jardín</span>
          <span class="landing-btn-icon">→</span>
        </button>
      </div>
      <div class="landing-hint">🌌 Explora el cosmos</div>
    </div>
  `;
}
