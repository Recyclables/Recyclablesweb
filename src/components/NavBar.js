import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/recyclables-signature.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/help"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
