import { Footer } from '../components/Footer.js';

export function MusicPage() {
  return `
    <div class="page active">
      <div class="page-music">
        <div class="music-hero">
          <h1>Música</h1>
        </div>
        
        <div class="music-container">
          <div class="music-card">
            <div class="music-visualizer">
              <div class="music-icon">🎵</div>
            </div>
            
            <div class="music-info">
              <h2>Reproductor de Audio</h2>
              <p>Carga un archivo de audio para acompañar tu jardín cósmico</p>
            </div>
            
            <div class="audio-player">
              <button class="play-btn" onclick="window.musicPlayer.toggle()">
                <span class="play-icon">▶</span>
              </button>
              <div class="audio-controls">
                <input type="range" class="volume-slider" min="0" max="1" step="0.1" value="0.5" 
                       onchange="window.musicPlayer.setVolume(this.value)">
                <span class="volume-label">Volumen</span>
              </div>
              <audio id="bg-audio" loop></audio>
            </div>
            
            <div class="music-upload" onclick="document.getElementById('file-input').click()">
              <input type="file" id="file-input" accept="audio/*" 
                     onchange="window.musicPlayer.loadFile(this.files[0])">
              <div class="upload-icon">📁</div>
              <p>Haz clic o arrastra un archivo de audio aquí</p>
              <span class="upload-hint">MP3, WAV, OGG soportados</span>
            </div>
          </div>
        </div>
        
        ${Footer()}
      </div>
    </div>
  `;
}

window.musicPlayer = {
  toggle() {
    if (getIsPlaying()) {
      pauseAudio();
    } else {
      const audio = document.getElementById('bg-audio');
      if (audio.src) {
        playAudio();
      } else {
        alert('Primero carga un archivo de audio');
      }
    }
    this.updateButton();
  },
  
  setVolume(vol) {
    setVolume(parseFloat(vol));
  },
  
  loadFile(file) {
    if (!file) return;
    const audio = document.getElementById('bg-audio');
    const url = URL.createObjectURL(file);
    audio.src = url;
    loadAudio(url);
    playAudio();
    this.updateButton();
  },
  
  updateButton() {
    const btn = document.querySelector('.play-btn');
    if (btn) {
      const icon = btn.querySelector('.play-icon');
      if (icon) {
        icon.textContent = getIsPlaying() ? '⏸' : '▶';
      }
    }
  }
};

import { loadAudio, playAudio, pauseAudio, toggleAudio, setVolume, getIsPlaying } from '../components/AudioPlayer.js';
