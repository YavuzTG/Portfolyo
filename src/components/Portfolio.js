import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolyo</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/2048_resim.jpg" alt="Proje 1" />
          <h3>2048</h3>
          <p>2048 oyunu klonu</p>
        </div>
        <div className="portfolio-item">
          <img src="/astra_resim.png" alt="Proje 2" />
          <h3>A.S.T.R.A.</h3>
          <p>Yapay zeka destekli sesli asistan</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
