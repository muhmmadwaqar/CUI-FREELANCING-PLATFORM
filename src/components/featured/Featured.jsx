import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span className="highlight">freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="Search" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button className="searchButton">Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button className="popularButton">Web Design</button>
            <button className="popularButton">WordPress</button>
            <button className="popularButton">Logo Design</button>
            <button className="popularButton">AI Services</button>
          </div>
        </div>
        <div className="right">
          <div className="featuredImageContainer">
            <img src="./img/man.png" alt="Consultation" className="featuredImage" />
            <div className="overlay">
              <h2>Consultation</h2>
              <p>Book a consultation with our experts.</p>
              <button className="overlayButton">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
