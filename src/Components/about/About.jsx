import React from "react";
import "./About.css";
import ME from "../../assets/chris.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>100+ Globally</small>
            </article>
            <article className="about__card">
              <TbFolders className="about__icon" />
              <h5>Project</h5>
              <small>70+ completed </small>
            </article>
          </div>

          <p>
            I'm an undergrad in the university of Obafemi Awolowo, studying
            computer with mathematics. i have gain profectional experience in
            data analytic using the following tools EXCEL, SQL,POWER-BI, TABLEAU
            and PYTHON.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
