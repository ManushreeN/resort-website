import React from 'react';

const photos = [
  { src: '/assests/glimpse4.png', label: 'Glimpse 4' },
  { src: '/assests/glimpse1.jpg', label: 'Glimpse 1' },
  { src: '/assests/glimpse2.jpg', label: 'Glimpse 2' },
  { src: '/assests/glimpse3.jpg', label: 'Glimpse 3' },
  { src: '/assests/glimpse5.jpg', label: 'Glimpse 5' },
  { src: '/assests/glimpse6.jpg', label: 'Glimpse 6' },
  
];

function Gallery() {
  return (
    <div id="gallery" className="gallery-bg">
      <div className="gallery-inner">
        <p className="section-tag">Photo Gallery</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1a3a3a', marginTop: 10, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          A Glimpse of Paradise
        </h2>

        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.label} className={p.wide ? 'wide' : ''}>
              <img src={p.src} alt={p.label} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
