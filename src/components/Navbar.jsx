import React, { useState } from 'react';

const links = ['Home', 'About','Rooms', 'Gallery',  'Contact'];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        <span>MANTRI STAY</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNavClick(l.toLowerCase()); }}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a className="nav-btn" href="tel:01169658991">Book Now</a>
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
    </nav>
  );
}

export default Navbar;
