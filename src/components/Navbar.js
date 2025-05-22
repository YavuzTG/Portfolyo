import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Ana Sayfa</NavLink></li>
        <li><NavLink to="/about">Ben Kimim?</NavLink></li>
        <li><NavLink to="/skills">Neler Yapabilirim?</NavLink></li>
        <li><NavLink to="/portfolio">Portfolyo</NavLink></li>
        <li><NavLink to="/contact">İletişim</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
