import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/assests/AB.JPG',
  '/assests/AB2.JPG',
  '/assests/AB3.JPG',
  '/assests/AB4.JPG',
  '/assests/AB5.JPG',
  '/assests/AB6.JPG',
  '/assests/AB7.JPG',
  '/assests/AB8.JPG',
];

const features = [
  { text: 'Night Fire Camp 🔥' },
  { text: 'Rain Dance 🕺 ' },
  { text: 'DJ with Party Music 🎶' },
  { text: 'Swimming Pool 🏊‍♂️' },
  { text: '⏰ All activities available until 11:00 PM' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const featureContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const featureItem = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="about">
      <div className="section">
        <motion.p
          className="section-tag"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          About the Resort
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          A Home of Natural Elegance
        </motion.h2>

        <div className="about-grid">
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Resort view ${currentIndex + 1}`}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="carousel-image"
              />
            </AnimatePresence>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="about-text"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="about-para">
             Mantri Stay Gokarna is a serene escape nestled in the heart of Gokarna, Karnataka, offering the perfect 
             blend of comfort and nature.Designed for relaxation and convenience, the property features well-appointed rooms, dormitories, 
              and cozy cottages to suit every traveler. Surrounded by a spacious outdoor area and a peaceful 
              natural setting, it’s an ideal destination for families, couples, and groups seeking to unwind and rejuvenate.
            </p>
            <h3 style={{ marginTop: '20px', marginBottom: '15px' }}> Experiences & Activities ✨</h3>
            <motion.div
              className="features-list"
              variants={featureContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((f) => (
                <motion.div className="feat" key={f.text} variants={featureItem}>
                  <span>{f.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;