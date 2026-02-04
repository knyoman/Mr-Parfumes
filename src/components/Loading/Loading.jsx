/**
 * Loading Component
 * 
 * Tampilan loading screen dengan animasi bertema parfum.
 */

import { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ onComplete }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Simulasi loading time (2 detik)
    const timer = setTimeout(() => {
      setIsHidden(true);
      // Callback setelah animasi selesai
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      {/* Floating Particles */}
      <div className="loading-particles">
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
        <div className="loading-particle"></div>
      </div>

      {/* Logo */}
      <div className="loading-logo">
        Mr<span>Parfumes</span>
      </div>

      {/* Spinner */}
      <div className="loading-spinner"></div>

      {/* Loading Text */}
      <div className="loading-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  );
};

export default Loading;
