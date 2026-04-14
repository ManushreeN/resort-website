import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="section">
        <p className="section-tag">Contact Us</p>
        <h2>Begin Your Journey</h2>
        <p className="sub">Our team is ready to craft your perfect escape. Reach out anytime.</p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p><strong> Name</strong><br />Mantri Stay Gokarna</p>
            <p>
              <strong> Address</strong>
              <br />
              Gokarna Rd, near Hittalmakki,
              <br />
              Hantalamakki, Gokarna,
              <br />
              Karnataka 581344
            </p>
            <p><strong> Phone</strong><br />01169658991</p>
            

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                title="Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5716179402325!2d74.35215649999999!3d14.5664728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83b8513bd805%3A0xff9c58b37ffbb7f3!2sMantri%20stay%20gokarna!5e0!3m2!1sen!2sin!4v1776166618039!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
