import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, BedSingle, Bath, Users, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';

const rooms = [
  { 
    name: 'Family Room Non-AC', 
    imgs: ['/assests/glimpse1.jpg', '/assests/glimpse2.jpg', '/assests/familyAC.jpg'],  
    count: 2,
    details: [
      { text: '2 Double beds', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      { text: '1 Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 7 guests (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  { 
    name: 'Double Room AC',     
    imgs: ['/assests/doubleAC.jpg', '/assests/glimpse3.jpg', '/assests/glimpse5.jpg'],  
    count: 4,
    details: [
      { text: '1 Double bed', icon: <BedDouble size={16} /> },
      { text: 'Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 4 guests (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  { 
    name: 'Family Room AC',     
    imgs: ['/assests/familyAC.jpg', '/assests/glimpse1.jpg', '/assests/doubleAC.jpg'],  
    count: 2,
    details: [
      { text: '2 Double beds', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      { text: '1 Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 7 guests (with extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  { 
    name: 'Double Room Non-AC', 
    imgs: ['/assests/doublenonAC.jpg', '/assests/glimpse6.jpg', '/assests/glimpse2.jpg'], 
    count: 2,
    details: [
      { text: '1 Double bed', icon: <BedDouble size={16} /> },
      { text: 'Outside attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 3 guests easily', icon: <Users size={16} /> }
    ]
  },
  { 
    name: 'AC Cottage',         
    imgs: ['/assests/cottage.jpg', '/assests/glimpse5.jpg', '/assests/glimpse4.png'],   
    count: 3,
    details: [
      { text: '1 Double bed', icon: <BedDouble size={16} /> },
      { text: '1 Single bed', icon: <BedSingle size={16} /> },
      { text: 'Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 7-8 guests (with 2 extra mattresses)', icon: <Users size={16} /> }
    ]
  },
  { 
    name: 'Dormitory Room',     
    imgs: ['/assests/glimpse1.jpg', '/assests/glimpse6.jpg', '/assests/doubleAC.jpg'],  
    count: 1,
    details: [
      { text: '4 Single beds', icon: <BedSingle size={16} /> },
      { text: 'Attached washroom', icon: <Bath size={16} /> },
      { text: 'Up to 8-9 guests (with 4 extra mattresses)', icon: <Users size={16} /> }
    ]
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
      
      <div className="room-body">
        <h3>{r.name}</h3>
        <p className="room-count">
          <span className="room-count-dot">&#9679;</span>
          {r.count} {r.count === 1 ? 'Room' : 'Rooms'} Available
        </p>
        
        <ul className="room-details-list with-icons">
          {r.details?.map((detail, idx) => (
            <li key={idx}>
              <span className="detail-icon">{detail.icon}</span>
              {detail.text}
            </li>
          ))}
          <li>
            <span className="detail-icon"><Wifi size={16} /></span>
            Wi-Fi available
          </li>
        </ul>

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