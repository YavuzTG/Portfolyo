import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Buraya profil resmi koyabilir */}
          <img src="https://via.placeholder.com/250" alt="Profil" />
        </div>
        <div className="about-text">
          <h2>Ben Kimim?</h2>
          <p>Yavuz Türker Gürleyük, Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
