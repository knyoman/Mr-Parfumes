/**
 * ProductDetail Component - Signature Collection
 * 
 * Menampilkan 3 koleksi parfum dengan nama, deskripsi, harga,
 * dan tombol order via WhatsApp.
 */

import './ProductDetail.css';

// Nomor WhatsApp (ganti dengan nomor asli)
const WHATSAPP_NUMBER = '6281234567890';

// Data 3 Koleksi Parfum
const perfumeCollection = [
  {
    id: 1,
    name: 'Noir Élégance',
    category: 'Parfum Pria',
    description: 'Perpaduan aroma maskulin dan misterius. Cocok untuk pria yang percaya diri dan berkelas.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop&auto=format',
    originalPrice: 850000,
    currentPrice: 599000,
    badges: ['Best Seller']
  },
  {
    id: 2,
    name: 'Rose Mystique',
    category: 'Parfum Wanita',
    description: 'Aroma feminin yang elegan dengan sentuhan rose dan vanilla. Sempurna untuk wanita modern.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop&auto=format',
    originalPrice: 799000,
    currentPrice: 549000,
    badges: ['New']
  },
  {
    id: 3,
    name: 'Ocean Breeze',
    category: 'Unisex',
    description: 'Kesegaran aroma laut yang menyegarkan. Unisex, cocok untuk aktivitas sehari-hari.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop&auto=format',
    originalPrice: 750000,
    currentPrice: 499000,
    badges: ['Limited']
  }
];

// Format harga ke Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Generate WhatsApp link
const getWhatsAppLink = (productName) => {
  const message = `Halo, saya ingin memesan parfum ${productName}. Mohon info lebih lanjut.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-card-image">
        {/* Badges */}
        <div className="product-card-badges">
          {product.badges.map((badge, index) => (
            <span 
              key={index} 
              className={`product-badge ${badge === 'Best Seller' ? 'gold' : ''}`}
            >
              {badge}
            </span>
          ))}
        </div>
        
        <img 
          src={product.image} 
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="product-card-info">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>

        {/* Price */}
        <div className="product-card-price">
          <span className="price-original">{formatPrice(product.originalPrice)}</span>
          <span className="price-current">{formatPrice(product.currentPrice)}</span>
        </div>

        {/* Order Button */}
        <a 
          href={getWhatsAppLink(product.name)}
          className="product-card-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  return (
    <section className="product-detail section" id="products">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Signature Collection</h2>
        <p className="section-subtitle">
          Pilih aroma yang sesuai dengan kepribadianmu. Setiap parfum diciptakan 
          dengan bahan premium untuk memberikan pengalaman terbaik.
        </p>

        {/* Collection Grid */}
        <div className="collection-grid">
          {perfumeCollection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
