import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Design and Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Application Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management Systems CMS.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Consulting and Strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Testing.</p>
            </li>
          </ul>
        </article>

        {/* End Of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analytic</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Cleaning and Preprocessing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Exploration and Visualization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Descriptive and Exploratory Analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Interpretation and Insight Generation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Market and Competitive Analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Visualization and Storytelling.</p>
            </li>
          </ul>
        </article>
        {/* End of data Analytic */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Content Creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Article and Blog Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Editing and Proofreading.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interviews and Q&A Content.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
