import React from 'react';
import { motion } from 'framer-motion';

const rooms = [
  { 
    name: 'Family Room Non-AC', 
    img: '/assests/glimpse1.jpg',  
    count: 2,
    details: ['2 Double beds', '1 Single bed', '1 Attached washroom', 'Up to 7 guests (with extra mattresses)']
  },
  { 
    name: 'Double Room AC',     
    img: '/assests/doubleAC.jpg',  
    count: 4,
    details: ['1 Double bed', 'Attached washroom', 'Up to 4 guests (with extra mattresses)']
  },
  { 
    name: 'Family Room AC',     
    img: '/assests/familyAC.jpg',  
    count: 2,
    details: ['2 Double beds', '1 Single bed', '1 Attached washroom', 'Up to 7 guests (with extra mattresses)']
  },
  { 
    name: 'Double Room Non-AC', 
    img: '/assests/doublenonAC.jpg', 
    count: 2,
    details: ['1 Double bed', 'Outside attached washroom', 'Up to 3 guests easily']
  },
  { 
    name: 'AC Cottage',         
    img: '/assests/cottage.jpg',   
    count: 3,
    details: ['1 Double bed', '1 Single bed', 'Attached washroom', 'Up to 7-8 guests (with 2 extra mattresses)']
  },
  { 
    name: 'Dormitory Room',     
    img: '/assests/glimpse1.jpg',  
    count: 1,
    details: ['4 Single beds', 'Attached washroom', 'Up to 8-9 guests (with 4 extra mattresses)']
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Rooms() {
  return (
    <div id="rooms" className="rooms-bg">
      <div className="rooms-inner">
        <motion.p
          className="section-tag"
          style={{ fontSize: '1.2rem', marginBottom: '16px' }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Accommodations
        </motion.p>

        <motion.h2
          className="rooms-title"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Our <em>Rooms &amp; Suites</em>
        </motion.h2>

        <div
          className="rooms-summary"
          style={{ backgroundImage: "url('/assests/doubleAC.jpg')" }}
        >
          <div className="summary-box">
            <h2>14</h2>
            <p>Total Rooms</p>
          </div>
          <div className="summary-box">
            <h2>28</h2>
            <p>Total Beds (56 can sleep)</p>
          </div>
          <div className="summary-box">
            <h2>85</h2>
            <p>Max with Extra Mattresses</p>
          </div>
          <div className="summary-box">
            <h2>11AM / 10AM</h2>
            <p>Check-in / Check-out</p>
          </div>
        </div>

        <motion.div
          className="rooms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {rooms.map((r) => (
            <motion.div
              className="room-card"
              key={r.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="img-wrapper">
                <motion.img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.35 }}
                />
              </div>
              <div className="room-body">
                <h3>{r.name}</h3>
                <p className="room-count">
                  <span className="room-count-dot">&#9679;</span>
                  {r.count} {r.count === 1 ? 'Room' : 'Rooms'} Available
                </p>
                <ul className="room-details-list">
                  {r.details?.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="room-footer">
                  <motion.a
                    className="btn-gold"
                    href="tel:08660205501"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Rooms;