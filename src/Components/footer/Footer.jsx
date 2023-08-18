import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TECHINSTANT
      </a>

      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <div className="footer__socials">
          <a href="https://github.com/CHRISEMMANUEL">
            <BiLogoGithub />
          </a>
          <a href="https://twitter.com/ChrisEmmanuel4u">
            <FaTwitter />
          </a>
        </div>
      </ul>

      <div className="footer__copyright">
        <small>&copy; TECTINSTANT HUB. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
