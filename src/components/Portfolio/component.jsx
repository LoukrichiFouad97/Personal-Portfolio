import React from "react";

import PortfolioImage1 from "../../assets/portfolio1.jpg";
import PortfolioImage2 from "../../assets/portfolio2.jpg";
import PortfolioImage3 from "../../assets/portfolio3.jpg";
import PortfolioImage4 from "../../assets/portfolio4.jpg";
import PortfolioImage5 from "../../assets/portfolio5.jpg";
import PortfolioImage6 from "../../assets/portfolio6.jpg";

function PortfolioUI() {
  const projects = [
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage1,
      category: "Development",
    },
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage2,
      category: "Development",
    },
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage3,
      category: "Development",
    },
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage4,
      category: "Development",
    },
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage5,
      category: "Development",
    },
    {
      title: "Mobile app landing design & Services",
      image: PortfolioImage6,
      category: "Development",
    },
  ];

  const renderProjects = projects.map((project, index) => {
    return (
      <div className="row" key={index}>
        <img src={project.image} />
        <div className="main-row">
          <div className="row-text">
            <h6>{project.category}</h6>
          </div>
          <div className="row-icon">
            <i className="bx bx-heart"></i>
          </div>
        </div>
        <h3>{project.title}</h3>
      </div>
    );
  });

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="main-text">
          <h2>My Portfolio</h2>
          <h4>Some Of My Distinguished Works</h4>
        </div>
        <div className="portfolio__content">{renderProjects}</div>
      </div>
    </section>
  );
}

export default PortfolioUI;
