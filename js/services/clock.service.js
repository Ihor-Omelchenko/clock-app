import { getScreenSize } from '../utils/screen-size.js';

export function startLiveClock(currentTimeISO) {
  const timeEl = document.getElementById('time');
  const greetingText = document.getElementById('greeting-text');
  const icon = document.getElementById('greeting-icon');
  const wrapper = document.getElementById('wrapper');

  let currentDate = new Date(currentTimeISO);

  function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function updateBackground() {
    const hours = currentDate.getHours();
    const screen = getScreenSize();

    const isDay = hours >= 6 && hours < 18;

    const imageUrl = isDay
        ? `/assets/${screen}/bg-image-daytime.jpg`
        : `/assets/${screen}/bg-image-nighttime.jpg`;

    if (wrapper) {
        wrapper.style.backgroundImage = `url('${imageUrl}')`;
    }
  }


  function updateDynamicUI(date) {
    const hours = date.getHours();

    if (greetingText) {
      greetingText.textContent = hours >= 6 && hours < 18 ? 'GOOD MORNING' : 'GOOD EVENING';
    }

    if (icon) {
      icon.src = hours >= 6 && hours < 18
        ? '/assets/desktop/icon-sun.svg'
        : '/assets/desktop/icon-moon.svg';
      icon.alt = hours >= 6 && hours < 18 ? 'Sun icon' : 'Moon icon';
    }
  }

  
  if (timeEl) timeEl.textContent = formatTime(currentDate);
  updateDynamicUI(currentDate);
  updateBackground();


  setInterval(() => {
    currentDate.setSeconds(currentDate.getSeconds() + 1);

    if (timeEl) timeEl.textContent = formatTime(currentDate);
    updateDynamicUI(currentDate);
    updateBackground();
  }, 1000);
}
