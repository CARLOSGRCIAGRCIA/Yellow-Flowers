import { LandingPage } from './pages/Landing.js';
import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { MusicPage } from './pages/Music.js';

const routes = {
  landing: LandingPage,
  home: HomePage,
  about: AboutPage,
  music: MusicPage,
};

let currentPage = null;

export function initRouter() {
  const app = document.getElementById('app');
  
  function navigate(route) {
    if (!routes[route]) route = 'landing';
    
    if (currentPage) {
      app.innerHTML = '';
    }
    
    const Page = routes[route];
    app.innerHTML = Page();
    currentPage = route;
    
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.style.display = route === 'landing' ? 'none' : 'flex';
    }
    
    document.body.classList.toggle('on-landing', route === 'landing');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.route === route);
    });
    
    document.querySelectorAll('.landing-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigate(btn.dataset.route);
      });
    });
    
    window.location.hash = route;
  }

  window.addEventListener('hashchange', () => {
    const route = window.location.hash.replace('#', '') || 'landing';
    navigate(route);
  });

  window.addEventListener('load', () => {
    const route = window.location.hash.replace('#', '') || 'landing';
    navigate(route);
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
      navigate(e.target.dataset.route);
    }
  });
}

export function navigateTo(route) {
  window.location.hash = route;
}
