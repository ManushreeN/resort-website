import React, { useState } from 'react';
import { motion } from 'framer-motion';

const links = ['Home', 'About','Rooms', 'Gallery',  'Contact'];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    
    < motion.nav className="navbar"
     initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        <span>MANTRI STAY</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((l,i) => (
          <motion.li key={l}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i, ease: 'easeOut' }}
          >
            <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNavClick(l.toLowerCase()); }}>

              {l}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="nav-actions">
        <motion.a className="nav-btn" href="tel:01169658991" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
          Book Now
        </motion.a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
