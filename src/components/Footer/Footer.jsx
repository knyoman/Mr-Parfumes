/**
 * Footer Component
 * 
 * Footer dengan brand info, links, contact, dan social media.
 */

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              Mr<span>PARFUM</span>
            </div>
            <p className="footer-description">
              Parfum premium dengan aroma eksklusif yang membuatmu lebih percaya diri. 
              Kualitas terbaik dengan harga terjangkau.
            </p>
            <div className="footer-social">
              <a 
                href="https://instagram.com/mrparfum" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="https://tiktok.com/@mrparfum" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                🎵
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Menu</h4>
            <ul>
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#benefits">Keunggulan</a></li>
              <li><a href="#products">Produk</a></li>
              <li><a href="#testimonials">Testimoni</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Hubungi Kami</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📱</span>
              <span>+62 812-3456-7890</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <span>hello@mrparfum.id</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} MrPARFUM. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
