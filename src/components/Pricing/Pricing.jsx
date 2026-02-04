/**
 * Pricing Component - Action Section (AIDA)
 * 
 * Menampilkan harga, promo, dan tombol WhatsApp untuk konversi.
 */

import './Pricing.css';

// Nomor WhatsApp (ganti dengan nomor asli)
const WHATSAPP_NUMBER = '6281234567890';
const PRODUCT_NAME = 'MrPARFUM Noir Élégance';

// Data yang termasuk dalam paket
const includesData = [
  { icon: '✓', text: 'Parfum MrPARFUM Noir Élégance 100ml' },
  { icon: '✓', text: 'Box Premium Eksklusif' },
  { icon: '✓', text: 'Kartu Garansi Originalitas' },
  { icon: '✓', text: 'Bubble Wrap & Packing Aman' },
  { icon: '✓', text: 'Free Sample Parfum Lain' }
];

// Data garansi
const guaranteeData = [
  { icon: '🛡️', text: 'Garansi 100% Original' },
  { icon: '📦', text: 'Pengiriman Aman' },
  { icon: '💬', text: 'Konsultasi Gratis' }
];

const Pricing = () => {
  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya ingin memesan ${PRODUCT_NAME}. Mohon info lebih lanjut.`
  )}`;

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <h2 className="section-title">Dapatkan Sekarang</h2>
        <p className="section-subtitle">
          Penawaran spesial terbatas! Jangan lewatkan kesempatan memiliki parfum premium ini.
        </p>

        <div className="pricing-container">
          <div className="pricing-card">
            {/* Promo Badge */}
            <span className="pricing-promo">🔥 Promo Spesial Februari!</span>

            {/* Product Title */}
            <h3 className="pricing-title">MrPARFUM Noir Élégance</h3>
            <p className="pricing-subtitle">Eau de Parfum 100ml</p>

            {/* Stock Warning */}
            <div className="stock-warning">
              <span className="stock-warning-icon">⚡</span>
              <span>Stok Terbatas! Sisa 23 botol lagi</span>
            </div>

            {/* Price */}
            <div className="pricing-price">
              <span className="price-original">Rp 850.000</span>
              <span className="price-current">Rp 599.000</span>
              <span className="price-period">/ botol</span>
            </div>

            {/* What's Included */}
            <div className="pricing-includes">
              <h4 className="pricing-includes-title">Yang Anda Dapatkan:</h4>
              <div className="pricing-includes-list">
                {includesData.map((item, index) => (
                  <div className="pricing-includes-item" key={index}>
                    <span className="pricing-includes-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pricing-cta">
              <a 
                href={whatsappLink} 
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Order via WhatsApp
              </a>
            </div>

            {/* Guarantee */}
            <div className="pricing-guarantee">
              {guaranteeData.map((item, index) => (
                <div className="guarantee-item" key={index}>
                  <span className="guarantee-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
