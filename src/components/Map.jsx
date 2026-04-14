import React from "react";

function Map() {
  return (
    <div className="section">
      <h2>Find Us</h2>
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Madikeri&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;