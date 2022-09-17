import React, { useRef, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import NavLogo from "../../assets/logo.png";

// markup & UI
// import NavbarUI from "./component";

export default function Navbar() {
  const [menuButton, setMenuButton] = useState(false);
  const navRef = useRef();
  function showNavbar() {
    setMenuButton((prev) => !prev);
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="header__logo">
          <img src={NavLogo} />
        </a>

        <nav className="navbar" ref={navRef}>
          <a className="navbar__item" href="#home">
            Home
          </a>
          <a className="navbar__item" href="#about">
            About Me
          </a>
          <a className="navbar__item" href="#services">
            Services
          </a>
          <a className="navbar__item" href="#portfolio">
            My Portfolio
          </a>
          <a className="navbar__item" href="#contact">
            Contact
          </a>
          {menuButton && (
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          )}
        </nav>

        {!menuButton && (
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
}
