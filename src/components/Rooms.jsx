import React from 'react';

const rooms = [
  {
    name: 'Cottage',
    img: '/assests/cottage.jpg',
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

function Rooms() {
  return (
    <div id="rooms" className="rooms-bg">
      <div className="rooms-inner">
        <p className="section-tag">Accommodations</p>
        
        <div className="rooms-grid">
          {rooms.map((r) => (
            <div className="room-card" key={r.name}>
              <img src={r.img} alt={r.name} loading="lazy" />
              <div className="room-body">
                <h3>{r.name}</h3>
                <div className="room-footer">
                  <a className="btn-gold" href="tel:01169658991">Book</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
