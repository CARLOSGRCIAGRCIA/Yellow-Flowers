import { initRouter } from './router.js';
import { initGalaxy } from './components/Galaxy.js';
import { initLyrics, initAudioWithLyrics, setCurrentLyric } from './components/LyricsDisplay.js';
import './style.css';

let backgroundAudio = null;

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initGalaxy();
  initLyrics();
  
  setTimeout(() => {
    document.body.classList.remove('not-loaded');
    initBackgroundMusic();
  }, 100);
  
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 60 + '%';
    star.style.animationDelay = '0s';
    star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
    document.querySelector('.shooting-stars').appendChild(star);
    setTimeout(() => { if (star.parentNode) star.remove(); }, 4000);
  }
  
  setInterval(() => {
    if (Math.random() > 0.3) createShootingStar();
  }, Math.random() * 5000 + 3000);
});

function initBackgroundMusic() {
  if (backgroundAudio) {
    backgroundAudio.pause();
    backgroundAudio.src = '';
    backgroundAudio = null;
  }
  
  backgroundAudio = new Audio('/music/Flowers.mp3');
  backgroundAudio.volume = 0.4;
  backgroundAudio.loop = true;
  
  initAudioWithLyrics(backgroundAudio, '/music/lyrics.lrc');
  
  backgroundAudio.currentTime = 0;
  backgroundAudio.play().catch(() => {
    document.addEventListener('click', () => {
      if (backgroundAudio) backgroundAudio.play().catch(() => {});
    }, { once: true });
  });
}

window.getBackgroundAudio = () => backgroundAudio;
