import React from "react";

import AboutImage from "../../assets/about.png";

function AboutMeUI() {
  const services = [
    "1. Problem Solving",
    "2. Creative Idea",
    "3. Search a lot",
    "4. High Quality",
  ];

  const renderServices = services.map((service, index) => {
    return (
      <div className="about-in" key={index + 1}>
        <h5>{service}</h5>
      </div>
    );
  });

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__img">
          <img src={AboutImage} />
        </div>

        <div className="about__text">
          <h2>About Me</h2>
          <h4>Hi, Im Here To Help Your Next Project</h4>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s, When An .ac porta sem turpis quis leo. Nulla
            in feugiat elit.
          </p>
          <div className="about-gri">{renderServices}</div>
          <a href="#" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMeUI;
