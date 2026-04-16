import React from 'react';
import { motion } from 'framer-motion';

const features = [
  
  { text: 'Double AC Rooms' },
  { text: 'Double Non-AC Rooms' },
  { text: 'Private Cottages' },
  { text: 'Large Outdoor Area' },
  { text: 'Family Friendly Stay' },
  { text: 'Comfortable Group Getaways' },
  
];

const fadeUp={
  hidden:{opacity:0,y:30},
  visible:{opacity:1,y:0,transition:{duration:0.6,ease:'easeOut'}}
};

const fadeLeft={
  hidden:{opacity:0,x:-40},
  visible:{opacity:1,x:0,transition:{duration:0.7,ease:'easeOut'}}
};

const fadeRight={
  hidden:{opacity:0,x:40},
  visible:{opacity:1,x:0,transition:{duration:0.7,ease:'easeOut'}}
};

const featureContainer={
  hidden:{opacity:0,x:40 },
  visible:{opacity:1,x:0,transition:{duration:0.7,ease:'easeOut'}},
};

const featureItem={
    hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};



function About() {
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
        About the Resort </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          A Home of Natural Elegance
        </motion.h2>
 
        <div className="about-grid">
          <motion.img
            src="/assests/contact.jpeg"
            alt="Resort view"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
 
          <motion.div
            className="about-text"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Mantri Stay Gokarna is a peaceful getaway located on Gokarna Road near Hittalmakki,
              Gokarna, Karnataka. Designed for comfort and convenience, the property offers Double AC rooms,
              Double Non-AC rooms, and cozy cottages to suit every kind of traveler. With a large outdoor area and a
              calm natural setting, it is an ideal stay for families, couples, and groups looking to relax and recharge.
            </p>
 
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