import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo-image.png";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Skills</a>
          </li>
          <li>
            <a href="/contact">Projects</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <Button variant="outlined" className="contact-button">
              Contact me
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
