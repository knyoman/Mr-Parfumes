/**
 * Hero Component - Attention Section (AIDA)
 * 
 * Bagian pertama landing page yang menarik perhatian pengunjung
 * dengan headline emosional dan visual yang menarik.
 */

import './Hero.css';

// Icon components (inline SVG untuk performa optimal)
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const Hero = () => {
  // Scroll ke section berikutnya
  const scrollToNext = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll ke pricing untuk CTA
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* Left Side - Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-icon"><StarIcon /></span>
            <span>Premium Collection 2024</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Aroma Eksklusif yang Membuatmu Lebih <span>Percaya Diri</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Temukan signature scent yang mencerminkan kepribadianmu. 
            Parfum premium dengan ketahanan hingga 12 jam, dibuat dari 
            bahan-bahan pilihan berkualitas tinggi.
          </p>

          {/* Features */}
          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon"><CheckIcon /></span>
              <span>Tahan 12+ Jam</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon"><CheckIcon /></span>
              <span>100% Original</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon"><CheckIcon /></span>
              <span>Garansi Aroma</span>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hero-visual">
          {/* Decorative circles */}
          <div className="hero-deco hero-deco-1"></div>
          <div className="hero-deco hero-deco-2"></div>
          
          {/* Perfume bottle image */}
          <div className="hero-image-wrapper">
            <img 
              src="https://ik.imagekit.io/xjj8xi6a8/Mr-Parfumes/HeroSection.png"
              alt="MrPARFUM Premium Perfume Collection"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll" onClick={scrollToNext}>
        <span>Scroll</span>
        <span className="hero-scroll-icon"><ChevronDown /></span>
      </div>
    </section>
  );
};

export default Hero;
