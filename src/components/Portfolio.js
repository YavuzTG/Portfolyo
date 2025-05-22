import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolyo</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/300" alt="Proje 1" />
          <h3>2048</h3>
          <p>2048 oyunu klonu</p>
        </div>
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/300" alt="Proje 2" />
          <h3>A.S.T.R.A.</h3>
          <p>Yapay zeka destekli sesli asistan</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
