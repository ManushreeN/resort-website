import React, { useState } from 'react';
import { List } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, BedSingle, Bath, Users, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';

const rooms = [
  {
    name: 'Family Room Non-AC',
    imgs: [
      '/assests/family non ac .JPG',
      '/assests/family non ac 2.JPG',
      '/assests/family non ac 3.JPG',
      '/assests/family non ac 4.JPG',
      '/assests/family non ac 5.JPG'
    ],
    count: 2,
    details: [
      { text: '2 King Size beds', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      { text: 'Up to 7-8 guests (with extra mattresses)', icon: <Users size={16} /> },
    ]
  },
  {
    name: 'Double Room AC',
    imgs: [
      '/assests/doubleAC.jpg',
      '/assests/doubleAC2.JPG',
      '/assests/doubleAC3.JPG',
      '/assests/doubleAC4.jpg',
      '/assests/doubleAC5.jpg'
    ],
    count: 4,
    details: [
      { text: '2 King Size bed', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      // { text: 'Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 3-4 guests (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  {
    name: 'Family Room AC',
    imgs: [
      '/assests/familyAC.jpg',
      '/assests/familyAC2.JPG',
      '/assests/familyAC3.JPG',
      '/assests/familyAC4.JPG',
      '/assests/familyAC5.JPG',
      '/assests/familyAC6.JPG'
    ],
    count: 2,
    details: [
      { text: '2 King Size beds', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      // { text: '1 Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 7-8 guest (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  {
    name: 'Double Room Non-AC',
    imgs: [
      '/assests/doublenonAC.jpg',
      '/assests/doubleroomnonAC.JPG',
      '/assests/doubleroomnonAC2.JPG',
      '/assests/doubleroomnonAC3.JPG',
      '/assests/doubleroomnonAC4.JPG'
    ],
    count: 2,
    details: [
      { text: '1 King Size bed', icon: <BedDouble size={16} /> },
      // { text: 'Outside attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 3 guest (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  {
    name: 'AC Cottage',
    imgs: [
      '/assests/cottageAC.jpg',
      '/assests/cottageAC2.JPG',
      '/assests/cottageAC3.JPG',
      '/assests/cottageAC4.JPG',
      '/assests/cottageAC5.JPG',
      '/assests/cottageAC6.JPG'
    ],
    count: 3,
    details: [
      { text: '1 King Size bed', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      // { text: 'Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 7-8 guest (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },

  {
    name: 'Swimming Pool',
    imgs: [
      '/assests/sp.jpg',
      '/assests/sp2.JPG',
      '/assests/sp3.JPG',
      '/assests/sp4.JPG',
      '/assests/sp5.JPG',

    ],
    // count: 3,
    // details: [
    //   { text: '1 King Size bed', icon: <BedDouble size={16} /> },
    //   { text: '1 Single bed', icon: <BedSingle size={16} /> },
    //   // { text: 'Attached washroom', icon: <Bath size={16} /> },
    //   { text: 'Up to 7-8 guest (with extra mattresses)', icon: <Users size={16} /> }
    // ]
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

const RoomCard = ({ r }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % r.imgs.length);
  const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + r.imgs.length) % r.imgs.length);

  return (
    <motion.div
      className="room-card"
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="img-wrapper slider-wrapper">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImgIndex}
            src={r.imgs[currentImgIndex]}
            alt={r.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="slider-img"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                nextImg();
              } else if (swipe > 50) {
                prevImg();
              }
            }}
          />
        </AnimatePresence>

        {r.imgs.length > 1 && (
          <>
            <button className="slider-btn prev" onClick={prevImg}><ChevronLeft size={20} color="#fff" /></button>
            <button className="slider-btn next" onClick={nextImg}><ChevronRight size={20} color="#fff" /></button>
            <div className="slider-dots">
              {r.imgs.map((_, i) => (
                <span key={i} className={`dot ${i === currentImgIndex ? 'active' : ''}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="room-body" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ textAlign: 'center', width: '100%', display: 'block' }}>{r.name}</h3>
        {r.name !== 'Swimming Pool' && (
          <p className="room-count" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: 'green', fontWeight: 'bold' }}>
            <span className="room-count-dot" style={{ backgroundColor: 'green' }}>&#9679;</span>
            {r.count} {r.count === 1 ? 'Room' : 'Rooms'} Available
          </p>
        )}

        {r.name !== 'Swimming Pool' && (
          <ul className="room-details-list with-icons" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', listStyle: 'none', padding: 0, margin: '16px 0' }}>
            {r.details?.map((detail, idx) => (
              <li key={idx}>
                <span className="detail-icon">{detail.icon}</span>
                {detail.text}
              </li>
            ))}
            <li style={{ gridColumn: 'span 2' }}>
              {/* <span className="detail-icon">
                {/* <Wifi size={16} /> */}
              {/* </span>
              Amenities: Wifi, Tv, Water Bottle 2, Towel 2, Soap */}

              <span className="detail-icon">
                <List size={16} />
              </span>
              Amenities: Wifi, TV, Water Bottle 2, Towel 2, Soap
            </li>
          </ul>
        )}

        {r.name !== 'Swimming Pool' && (
          <div className="room-footer centered">
            <motion.a
              className="btn-gold large-book-btn"
              href="tel:08660205501"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
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
            <RoomCard key={r.name} r={r} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Rooms;