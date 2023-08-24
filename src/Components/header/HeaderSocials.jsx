import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__Socials">
      <a
        href="https://www.linkedin.com/in/chrisemmanuel4u/"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/chrisemmanuel4u/"
        aria-label="Twitter Profile"
      >
        <FaTwitter />
      </a>
      <a href="https://github.com/chrisemmanuel/" aria-label="GitHub Profile">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
