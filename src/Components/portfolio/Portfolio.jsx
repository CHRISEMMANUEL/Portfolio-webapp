import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/dashboard1.png";
import IMG2 from "../../assets/dashboard2.png";
import IMG3 from "../../assets/dashboard3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/dashboard6.jpg";

// IMAGE ARRAY ?//
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Covid19 Dashboard analysis on ms-excel",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Maven market analysis on powerbi",
    github: "https://github.com/CHRISEMMANUEL/Maven-market-analysis",
    demo: "https://www.novypro.com/project/maven-market-dashboard",
  },
  {
    id: 3,
    image: IMG3,
    title: "Sales Dashboard analysis on powerbi",
    github: "https://github.com/CHRISEMMANUEL/Sale-Analytic-Dashboard",
    demo: "https://www.novypro.com/project/sales-13",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining task and tracking progress",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Chat template and infographics on Figma",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Real Estate property management Dashboard analysis on powerbi",
    github: "https://github.com",
    demo: "https://www.novypro.com/project/estate-management-",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
