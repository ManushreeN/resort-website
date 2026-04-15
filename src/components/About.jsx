import React from 'react';

const features = [
  
  { text: 'Double AC Rooms' },
  { text: 'Double Non-AC Rooms' },
  { text: 'Private Cottages' },
  { text: 'Large Outdoor Area' },
  { text: 'Family Friendly Stay' },
  { text: 'Comfortable Group Getaways' },
  
];

function About() {
  return (
    <section id="about">
      <div className="section">
        <p className="section-tag">About the Resort</p>
        <h2>A Home of Natural Elegance</h2>

        <div className="about-grid">
          <img
            src="/assests/contact.jpeg"
            alt="Resort view"
          />

          <div className="about-text">
            <p>
              Mantri Stay Gokarna is a peaceful getaway located on Gokarna Road near Hittalmakki,
              Gokarna, Karnataka. Designed for comfort and convenience, the property offers Double AC rooms,
              Double Non-AC rooms, and cozy cottages to suit every kind of traveler. With a large outdoor area and a
              calm natural setting, it is an ideal stay for families, couples, and groups looking to relax and recharge.
            </p>
           

            <div className="features-list">
              {features.map((f) => (
                <div className="feat" key={f.text}>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
