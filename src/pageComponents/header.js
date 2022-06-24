import React from "react";
import "../styles/header.css";
import Background from "../images/backHeader.jpeg";
import ScrollDown from "../images/scrollDown";

export const Header = () => {
  return (
    <header
      className="topHeader"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <nav className="navHeader">
        <ul>
          <li>
            <a href="#sectionAbout" className="aNav aMenu">
              About
            </a>
          </li>
          <li>
            <a href="#" className="aNav aMenu">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="aNav aLogo">
              OzCoffee
            </a>
          </li>
          <li>
            <a href="#" className="aNav aMenu">
              About
            </a>
          </li>
          <li>
            <a href="#" className="aNav aMenu">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* scroll down button */}
      <a href="#sectionAbout" className="aScrollDownHeader">
        <ScrollDown color="white" width="12rem" />
      </a>
    </header>
  );
};
