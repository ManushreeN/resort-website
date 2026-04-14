import React from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Hero() {
  const heroBackground = {
    backgroundImage: `linear-gradient(rgba(10,30,30,0.6), rgba(10,30,30,0.5)), url(${process.env.PUBLIC_URL}/assests/cover.jpg?v=3)`,
  };

  return (
    <section id="home" className="hero" style={heroBackground}>
      <div className="hero-content">
        <p className="tag">Madikeri</p>
        <h1>Where Nature<br /><em>Feels Like Home</em></h1>
        <p className="desc">
        A quiet getaway surrounded by nature, offering comfort, views, and a warm stay
        </p>
        <div className="hero-btns">
          <button className="btn-gold" onClick={() => scrollTo('rooms')}>Explore Rooms</button>
          <a className="btn-outline" href="tel:01169658991">Book a Stay</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
