/**
 * Navbar Component
 * 
 * Navigasi sticky dengan efek scroll dan mobile menu.
 */

import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when link clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#hero" className="navbar-logo">
          Mr<span>Parfumes</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            <a href="#hero" className="navbar-link" onClick={closeMenu}>
              Beranda
            </a>
            <a href="#benefits" className="navbar-link" onClick={closeMenu}>
              Keunggulan
            </a>
            <a href="#products" className="navbar-link" onClick={closeMenu}>
              Koleksi
            </a>
            <a href="#testimonials" className="navbar-link" onClick={closeMenu}>
              Testimoni
            </a>
            <a href="#faq" className="navbar-link" onClick={closeMenu}>
              FAQ
            </a>
            <a href="#pricing" className="navbar-cta" onClick={closeMenu}>
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
