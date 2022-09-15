import React from "react";

import PortfolioImage1 from "../../assets/portfolio1.jpg";
import PortfolioImage2 from "../../assets/portfolio2.jpg";
import PortfolioImage3 from "../../assets/portfolio3.jpg";
import PortfolioImage4 from "../../assets/portfolio4.jpg";
import PortfolioImage5 from "../../assets/portfolio5.jpg";
import PortfolioImage6 from "../../assets/portfolio6.jpg";

function PortfolioUI() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2>My Portfolio</h2>
        <h4>Some Of My Distinguished Works</h4>
      </div>

      <div className="portfolio-content">
        <div className="row">
          <img src={PortfolioImage1} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>

        <div className="row">
          <img src={PortfolioImage2} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>

        <div className="row">
          <img src={PortfolioImage3} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>

        <div className="row">
          <img src={PortfolioImage4} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>

        <div className="row">
          <img src={PortfolioImage5} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>

        <div className="row">
          <img src={PortfolioImage6} />
          <div className="main-row">
            <div className="row-text">
              <h6>Development</h6>
            </div>
            <div className="row-icon">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <h3>Mobile app landing design & Services</h3>
        </div>
      </div>
    </section>
  );
}

export default PortfolioUI;
