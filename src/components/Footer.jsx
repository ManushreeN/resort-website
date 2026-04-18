import React, { useState } from 'react';
import { motion } from 'framer-motion';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer>
      <motion.div
        className="footer-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Brand */}
        <motion.div className="footer-brand" variants={itemVariants}>
          <div className="footer-logo"><span>Mantri Stay Gokarna</span></div>
          <p>Relax, refresh, and escape the routine.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-col footer-quick-links" variants={itemVariants}>
          <h4>Quick Links</h4>
          <ul>
            {['Home', 'About', 'Rooms', 'Gallery', 'Contact'].map((l) => (
              <li key={l}><a href="/" onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>{l}</a></li>
            ))}
            <li><a href="/" className="terms-link" onClick={(e) => { e.preventDefault(); setTermsOpen(true); }}>Terms & Conditions</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="footer-col footer-contact" variants={itemVariants}>
          <h4>Contact</h4>
          <ul>
            <li>Mantri Resort Gokarna Hittalmakki, Karnataka 581344</li>
            <li>08660205501</li>
          </ul>
        </motion.div>
      </motion.div>

      {termsOpen && (
        <div className="terms-modal-overlay" onClick={() => setTermsOpen(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <button className="terms-modal-close" onClick={() => setTermsOpen(false)} aria-label="Close terms popup">×</button>
            <img src="/assests/terms-conditions.jpg" alt="Terms and Conditions" />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
