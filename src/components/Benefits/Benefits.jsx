/**
 * Benefits Component - Interest Section (AIDA)
 * 
 * Menjelaskan keunggulan parfum untuk membangun minat pengunjung.
 * Menampilkan 4 benefit utama dengan ikon dan deskripsi.
 */

import './Benefits.css';

// Data benefit parfum
const benefitsData = [
  {
    id: 1,
    icon: '⏱️',
    title: 'Tahan Hingga 12 Jam',
    description: 'Formula eksklusif yang memastikan aroma bertahan sepanjang hari tanpa perlu reapply.'
  },
  {
    id: 2,
    icon: '✨',
    title: 'Aroma Premium',
    description: 'Dibuat dari bahan-bahan berkualitas tinggi yang diimpor langsung dari Prancis.'
  },
  {
    id: 3,
    icon: '👔',
    title: 'Unisex Collection',
    description: 'Koleksi yang cocok untuk pria maupun wanita, fleksibel untuk berbagai kesempatan.'
  },
  {
    id: 4,
    icon: '🎁',
    title: 'Packaging Eksklusif',
    description: 'Kemasan premium yang elegan, perfect untuk hadiah atau koleksi pribadi Anda.'
  }
];

// Data statistik
const statsData = [
  { value: '1,500+', label: 'Pelanggan Puas' },
  { value: '12+', label: 'Jam Ketahanan' },
  { value: '100%', label: 'Original Product' },
  { value: '4.9', label: 'Rating Pelanggan' }
];

const Benefits = () => {
  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Mengapa Memilih MrPARFUM?</h2>
        <p className="section-subtitle">
          Kami menghadirkan pengalaman parfum premium dengan kualitas terbaik 
          untuk menemani setiap momen berharga Anda.
        </p>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {benefitsData.map((benefit) => (
            <div className="benefit-card" key={benefit.id}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="benefits-stats">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
