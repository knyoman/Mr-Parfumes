/**
 * ProductDetail Component - Signature Collection
 * 
 * Menampilkan koleksi parfum dari Contentful CMS dengan nama, deskripsi, 
 * harga, kategori, dan tombol order via WhatsApp.
 */

import { useState, useEffect } from 'react';
import client from '../../contentful';
import './ProductDetail.css';

// Nomor WhatsApp (ganti dengan nomor asli)
const WHATSAPP_NUMBER = '6281234567890';

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
  // Extract fields from Contentful response
  // Field names: name, descripsition, price, categori, image, featured
  const { name, descripsition, price, categori, image, featured } = product.fields;
  
  // Get description text (handle rich text if needed)
  const descriptionText = typeof descripsition === 'object' 
    ? descripsition?.content?.[0]?.content?.[0]?.value || 'Deskripsi produk'
    : descripsition || 'Deskripsi produk';

  // Image is direct URL from ImageKit
  const imageUrl = image || 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-card-image">
        <img 
          src={imageUrl} 
          alt={name || 'Parfum'}
        />
      </div>

      {/* Product Info */}
      <div className="product-card-info">
        {categori && <span className="product-card-category">{categori}</span>}
        <h3 className="product-card-name">{name || 'Nama Produk'}</h3>
        <p className="product-card-description">{descriptionText}</p>

        {/* Price */}
        <div className="product-card-price">
          <span className="price-current">{formatPrice(price || 0)}</span>
        </div>

        {/* Order Button */}
        <a 
          href={getWhatsAppLink(name || 'Parfum')}
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

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="collection-grid">
    {[1, 2, 3].map((i) => (
      <div key={i} className="product-card skeleton">
        <div className="product-card-image skeleton-image"></div>
        <div className="product-card-info">
          <div className="skeleton-text skeleton-category"></div>
          <div className="skeleton-text skeleton-title"></div>
          <div className="skeleton-text skeleton-desc"></div>
          <div className="skeleton-text skeleton-price"></div>
          <div className="skeleton-text skeleton-btn"></div>
        </div>
      </div>
    ))}
  </div>
);

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from Contentful
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: 'mrParfumes',
        });
        
        // Debug: lihat struktur data dari Contentful
        console.log('Contentful Response:', response);
        console.log('Items:', response.items);
        if (response.items.length > 0) {
          console.log('First item fields:', response.items[0].fields);
        }
        
        setProducts(response.items);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Gagal memuat produk. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="product-detail section" id="products">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Signature Collection</h2>
        <p className="section-subtitle">
          Pilih aroma yang sesuai dengan kepribadianmu. Setiap parfum diciptakan 
          dengan bahan premium untuk memberikan pengalaman terbaik.
        </p>

        {/* Loading State */}
        {loading && <LoadingSkeleton />}

        {/* Error State */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="collection-grid">
            {products.map((product) => (
              <ProductCard key={product.sys.id} product={product} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="empty-message">
            <p>Belum ada produk tersedia.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
