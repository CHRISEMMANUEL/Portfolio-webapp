import React from "react";
import "./Header.css";
import CV from "./CTA";
import ME1 from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chris Emmanuel</h1>
        <h5 className="text-light">Front-end Dev || Data Analyst</h5>
        <CV />
        <HeaderSocials />

        <div className="me">
          <img src={ME1} alt="me1" />
        </div>
        <a href="#Contant" className="Scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
