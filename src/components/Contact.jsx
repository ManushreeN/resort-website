import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Contact() {
  return (
    <section id="contact">
      <div className="section">
        <motion.p
          className="section-tag"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Contact Us
        </motion.p>
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Begin Your Journey
        </motion.h2>

        <motion.p
          className="sub"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Our team is ready to craft your perfect escape. Reach out anytime.
        </motion.p>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p><strong> Name</strong><br />Mantri Stay Gokarna</p>
            <p>
              <strong> Address</strong>
              <br />
              Mantri Resort Gokarna Hittalmakki,
              <br />
              Karnataka 581344
            </p>
            <p><strong> Phone</strong><br />08660205501</p>
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="contact-map"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
