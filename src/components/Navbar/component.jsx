import React from "react";

import NavLogo from "../../assets/logo.png"

export default function NavbarUI() {
  return (
    <nav className="navbar">
      <a href="#" class="navbar__logo">
        <img src={NavLogo} />
      </a>
      <div class="bx bx-menu" id="menu-icon"></div>

      <ul class="navbar__list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">My Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
