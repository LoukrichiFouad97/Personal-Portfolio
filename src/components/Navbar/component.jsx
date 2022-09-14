import React from "react";

import "./style.scss";

export default function NavbarUI() {
  return (
    <header>
      <a href="#" class="logo">
        <img src="img/logo.png" />
      </a>
      <div class="bx bx-menu" id="menu-icon"></div>

      <ul class="navbar">
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
    </header>
  );
}
