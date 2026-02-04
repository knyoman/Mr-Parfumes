/**
 * MrParfumes - Landing Page Parfum Premium
 * 
 * Menggunakan konsep marketing AIDA:
 * - Attention: Hero Section
 * - Interest: Benefits Section
 * - Desire: ProductDetail & Testimonials
 * - Action: Pricing Section
 * 
 * Fitur Tambahan: Navbar, Loading, FAQ & Footer
 */

import { useState, useEffect } from 'react';
import './App.css';

// Import semua komponen
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

// WhatsApp config
const WHATSAPP_NUMBER = '6281234567890';
const WHATSAPP_MESSAGE = 'Halo, saya tertarik dengan parfum MrParfumes!';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // WhatsApp link
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loading onComplete={handleLoadingComplete} />}

      <div className="app">
        {/* ===== Navbar ===== */}
        <Navbar />

        {/* ===== ATTENTION - Hero Section ===== */}
        <Hero />

        {/* ===== INTEREST - Benefits Section ===== */}
        <Benefits />

        {/* ===== DESIRE - Product Detail ===== */}
        <ProductDetail />

        {/* ===== DESIRE - Testimonials ===== */}
        <Testimonials />

        {/* ===== ACTION - Pricing Section ===== */}
        <Pricing />

        {/* ===== FAQ Section ===== */}
        <FAQ />

        {/* ===== Footer ===== */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <a 
          href={whatsappLink}
          className="floating-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
        >
          💬
        </a>

        {/* Back to Top Button */}
        <button 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </>
  );
}

export default App;
