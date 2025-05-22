import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" end onClick={toggleMenu}>Ana Sayfa</NavLink></li>
        <li><NavLink to="/about" onClick={toggleMenu}>Ben Kimim?</NavLink></li>
        <li><NavLink to="/skills" onClick={toggleMenu}>Neler Yapabilirim?</NavLink></li>
        <li><NavLink to="/portfolio" onClick={toggleMenu}>Portfolyo</NavLink></li>
        <li><NavLink to="/contact" onClick={toggleMenu}>İletişim</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
