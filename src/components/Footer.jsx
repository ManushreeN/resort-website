import React from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo"><span>Mantri Stay Gokarna</span></div>
          <p>Relax, refresh, and escape the routine.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            {['Home', 'About', 'Rooms', 'Gallery', 'Contact'].map((l) => (
              <li key={l}><a href="/" onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        {/* <div className="footer-col footer-services">
          <h4>Services</h4>
          <ul>
            {[ 'Fine Dining', 'Water Sports', 'Sunset view point', 'Diving'].map((s) => (
              <li key={s}><a href="/">{s}</a></li>
            ))}
          </ul>
        </div> */}

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Mantri Resort Gokarna Hittalmakki, Karnataka 581344</li>
            <li>08660205501</li>
          </ul>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mantri Stay Gokarna. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div> */}

    </footer>
  );
}

export default Footer;
