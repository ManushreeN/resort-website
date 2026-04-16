import React from 'react';
import { motion } from 'framer-motion';
// const [selectedRoom, setSelectedRoom] = useState(null);

const rooms = [
  {
    name: 'Cottage',
    img: '/assests/cottage.jpg',
    //  price: '₹2500 / night',
    // rating: 4.5,
  },
  {
    name: 'Double Room AC',
    img: '/assests/doubleAC.jpg',
  },
  {
    name: 'Double Room Non-AC',
    img: '/assests/doublenonAC.jpg',
  },
  {
    name: 'Family Room Non-AC',
    img: '/assests/glimpse1.jpg',
  },
  {
    name: 'Family Room AC',
    img: '/assests/familyAC.jpg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
 
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Rooms() {
  return (
    <div id="rooms" className="rooms-bg">
      <div className="rooms-inner">
        < motion.p className="section-tag" variants={headingVariants} initial="hidden" whileInView="visible" 
        viewport={{once:true,amount:0.4}}>Accommodations</ motion.p>
        
        <motion.div
          className="rooms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {rooms.map((r) => (
            <motion.div
              className="room-card"
              key={r.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              
              {/* Image + Overlay */}
              <div className="img-wrapper">
                <motion.img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="overlay">
                  {/* <span>View Room</span> */}
                </div>
              </div>

              <div className="room-body">
                <h3>{r.name}</h3>

                <div className="room-footer">
                  <motion.a
                    className="btn-gold"
                    href="tel:01169658991"
                    whileHover={{ scale: 1.1 }}
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