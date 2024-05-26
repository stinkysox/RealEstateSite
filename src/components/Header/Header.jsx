import React from "react";
import "./Header.css";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  const [menuOpened, setMenu] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">
            <button className="button">Contact Us</button>
          </a>
        </div>
        <div className="menu-icon">
          <BiMenuAltRight size={30} onClick={toggleMenu} />
        </div>
      </div>
    </section>
  );
};

export default Header;
