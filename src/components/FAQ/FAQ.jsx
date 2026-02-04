/**
 * FAQ Component - Frequently Asked Questions
 * 
 * Menjawab pertanyaan umum pelanggan dengan accordion interaktif.
 */

import { useState } from 'react';
import './FAQ.css';

// Data FAQ
const faqData = [
  {
    id: 1,
    question: 'Apakah parfum ini original?',
    answer: 'Ya, 100% original dan bergaransi. Kami menjamin keaslian setiap produk yang kami jual. Setiap pembelian disertai kartu garansi originalitas.'
  },
  {
    id: 2,
    question: 'Berapa lama ketahanan aromanya?',
    answer: 'MrPARFUM Noir Élégance memiliki ketahanan aroma hingga 12+ jam dengan formula Eau de Parfum premium. Proyeksi aroma sangat baik selama 4-6 jam pertama.'
  },
  {
    id: 3,
    question: 'Apakah bisa COD?',
    answer: 'Saat ini kami melayani pembayaran transfer bank dan e-wallet. Namun, kami menjamin pengiriman aman dengan bubble wrap dan packing eksklusif.'
  },
  {
    id: 4,
    question: 'Berapa lama pengiriman?',
    answer: 'Pengiriman dilakukan maksimal 1x24 jam setelah pembayaran dikonfirmasi. Estimasi tiba 2-4 hari untuk Pulau Jawa, dan 4-7 hari untuk luar Jawa.'
  },
  {
    id: 5,
    question: 'Apakah ada garansi jika produk rusak?',
    answer: 'Tentu! Jika produk rusak atau tidak sesuai saat diterima, kami akan mengganti dengan produk baru. Hubungi kami dalam 1x24 jam setelah paket diterima.'
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // WhatsApp link for contact
  const whatsappLink = 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20MrPARFUM';

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title">Pertanyaan Umum</h2>
        <p className="section-subtitle">
          Temukan jawaban atas pertanyaan yang sering ditanyakan
        </p>

        <div className="faq-container">
          <div className="faq-list">
            {faqData.map((faq) => (
              <div 
                className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
                key={faq.id}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-content">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="faq-contact">
            <p className="faq-contact-text">
              Masih ada pertanyaan? <strong>Hubungi kami langsung!</strong>
            </p>
            <a 
              href={whatsappLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
