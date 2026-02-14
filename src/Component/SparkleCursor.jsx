import { useEffect } from 'react';
import './SparkleCursor.css';

const SparkleCursor = () => {
  useEffect(() => {
    // Allow sparkles on all devices.

    const sparkles = [];
    const sparkleCount = 4;
    const colors = ['#3bd6ff', '#4fa3ff', '#7aa7ff', '#34c3ff'];

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      const size = 6 + Math.random() * 10;
      const duration = 650 + Math.random() * 500;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const rotate = Math.floor(Math.random() * 180);

      sparkle.style.setProperty('--sparkle-size', `${size}px`);
      sparkle.style.setProperty('--sparkle-color', color);
      sparkle.style.setProperty('--sparkle-duration', `${duration}ms`);
      sparkle.style.setProperty('--sparkle-rotate', `${rotate}deg`);

      document.body.appendChild(sparkle);
      sparkles.push(sparkle);

      setTimeout(() => {
        sparkle.remove();
        const index = sparkles.indexOf(sparkle);
        if (index > -1) sparkles.splice(index, 1);
      }, duration + 100);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < sparkleCount; i += 1) {
        setTimeout(() => {
          const offsetX = (Math.random() - 0.5) * 24;
          const offsetY = (Math.random() - 0.5) * 24;
          createSparkle(e.clientX + offsetX, e.clientY + offsetY);
        }, i * 30);
      }
    };

    let lastTime = 0;
    const throttledMouseMove = (e) => {
      const now = performance.now();
      if (now - lastTime < 35) return;
      lastTime = now;
      handleMouseMove(e);
    };

    document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      sparkles.forEach((sparkle) => sparkle.remove());
    };
  }, []);

  return null;
};

export default SparkleCursor;
