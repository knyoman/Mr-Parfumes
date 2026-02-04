/**
 * Testimonials Component - Desire Section Part 2 (AIDA)
 * 
 * Menampilkan testimoni pelanggan dan trust badges untuk
 * memperkuat keinginan membeli dengan social proof.
 */

import './Testimonials.css';

// Data trust badges
const trustBadges = [
  { icon: '🏆', text: 'Best Seller 2024' },
  { icon: '⭐', text: 'Premium Quality' },
  { icon: '🛡️', text: '100% Original' },
  { icon: '📦', text: '1,500+ Terjual' }
];

// Data testimoni pelanggan
const testimonialsData = [
  {
    id: 1,
    content: 'Parfum ini benar-benar luar biasa! Aromanya sangat maskulin dan elegan. Saya selalu mendapat pujian dari rekan kerja. Ketahanannya juga tidak main-main, 12 jam masih tercium!',
    rating: 5,
    name: 'Ahmad Rizki',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    verified: true
  },
  {
    id: 2,
    content: 'Saya sudah mencoba banyak parfum premium, tapi MrPARFUM ini berbeda. Aroma citrus di awal yang segar, lalu berubah menjadi woody yang hangat. Perfect untuk semua occasion!',
    rating: 5,
    name: 'Sarah Putri',
    role: 'Fashion Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    verified: true
  },
  {
    id: 3,
    content: 'Awalnya ragu karena beli online, tapi setelah sampai dan dicoba, langsung jatuh cinta! Packagingnya premium banget, cocok buat gift. Pasti repeat order!',
    rating: 5,
    name: 'Budi Santoso',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
    verified: true
  }
];

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="testimonial-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star <= rating ? '' : 'empty'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-subtitle">
          Ribuan pelanggan telah merasakan pengalaman parfum premium dari MrPARFUM
        </p>

        {/* Trust Badges */}
        <div className="trust-badges">
          {trustBadges.map((badge, index) => (
            <div className="trust-badge" key={index}>
              <span className="trust-badge-icon">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              {/* Quote Icon */}
              <div className="testimonial-quote">"</div>
              
              {/* Content */}
              <p className="testimonial-content">{testimonial.content}</p>
              
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Author */}
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                  {testimonial.verified && (
                    <span className="verified-badge">
                      ✓ Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
