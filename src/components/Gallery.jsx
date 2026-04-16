import React from 'react';
import { motion } from 'framer-motion';
 
const photos = [
  { src: '/assests/glimpse4.png', label: 'Glimpse 4' },
  { src: '/assests/glimpse1.jpg', label: 'Glimpse 1' },
  { src: '/assests/glimpse2.jpg', label: 'Glimpse 2' },
  { src: '/assests/glimpse3.jpg', label: 'Glimpse 3' },
  { src: '/assests/glimpse5.jpg', label: 'Glimpse 5' },
  { src: '/assests/glimpse6.jpg', label: 'Glimpse 6' },
];
 
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
 
// Even index → slide from left, Odd index → slide from right
const getSlideVariant = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      // delay: (index % 3) * 0.1,
    },
  },
});
 
function Gallery() {
  return (
    <div id="gallery" className="gallery-bg">
      <div className="gallery-inner">
        <motion.p
          className="section-tag"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
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
 
        <div className="gallery-grid">
          {photos.map((p, index) => (
            <motion.div
              key={p.label}
              className={p.wide ? 'wide' : ''}
              variants={getSlideVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ overflow: 'hidden' }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            >
              <img src={p.src} alt={p.label} loading="lazy" style={{ width: '100%', display: 'block' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Gallery;