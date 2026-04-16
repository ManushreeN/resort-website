import React from 'react';
import { motion } from 'framer-motion';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Hero() {
  const heroBackground = {
    backgroundImage: `linear-gradient(rgba(10,30,30,0.6), rgba(10,30,30,0.5)), url(${process.env.PUBLIC_URL}/assests/cover.jpg?v=3)`,
  };

  return (
    <section id="home" className="hero" style={heroBackground}>
      <div className="hero-content">
        <motion.p
          className="tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          Gokarna
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          Where Nature<br /><em>Feels Like Home</em>
        </motion.h1>

        <motion.p
          className="desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          A quiet getaway surrounded by nature, offering comfort, views, and a warm stay
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
        >
          <button className="btn-gold" onClick={() => scrollTo('rooms')}>Explore Rooms</button>
          <a className="btn-gold" href="tel:08660205501">Book a Stay</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;