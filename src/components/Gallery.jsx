import React, { useState } from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: '/assests/glimpse4.png', label: 'Glimpse 4' },
  { src: '/assests/glimpse1.jpg', label: 'Glimpse 1' },
  { src: '/assests/glimpse2.jpg', label: 'Glimpse 2' },
  { src: '/assests/glimpse3.jpg', label: 'Glimpse 3' },
  { src: '/assests/glimpse5.jpg', label: 'Glimpse 5' },
  { src: '/assests/glimpse6.jpg', label: 'Glimpse 6' },
  { src: '/assests/overview.jpg', label: 'Glimpse 7' },
  { src: '/assests/overview2.jpg', label: 'Glimpse 8' },
  { src: '/assests/overview3.jpg', label: 'Glimpse 9' },
  { src: '/assests/overview4.jpg', label: 'Glimpse 10' },
  { src: '/assests/overview5.jpg', label: 'Glimpse 11' },
  { src: '/assests/overview6.jpg', label: 'Glimpse 12' },
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="gallery" className="gallery-bg">
      <div className="gallery-inner">
        <motion.p
          className="section-tag"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Photo Gallery
        </motion.p>

        <motion.h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#1a3a3a',
            marginTop: 10,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          A Glimpse of Paradise
        </motion.h2>

        <div className="gallery-carousel">
          <motion.div
            className="carousel-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={photos[currentIndex].src} 
              alt={photos[currentIndex].label}
              className="carousel-image"
            />
          </motion.div>

          <button className="carousel-btn prev-btn" onClick={goToPrevious}>
            ❮
          </button>
          <button className="carousel-btn next-btn" onClick={goToNext}>
            ❯
          </button>

          <div className="carousel-indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;