export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-icon">🌌</span>
          <span class="footer-title">Cosmic Garden</span>
        </div>
        <div class="footer-copyright">
          <p>© ${new Date().getFullYear()} <a href="https://github.com/CARLOSGRCIAGRCIA" target="_blank" rel="noopener noreferrer">@CARLOSGRCIAGRCIA</a></p>
          <p class="footer-tagline">Hecho con ✨ y estrellas</p>
        </div>
      </div>
    </footer>
  `;
}
