import React from "react";

import AboutImage from "../../assets/about.png";

function AboutMeUI() {
  return (
    <section class="about" id="about">
      <div class="about__img">
        <img src={AboutImage} />
      </div>

      <div class="about__text">
        <h2>About Me</h2>
        <h4>Hi, Im Here To Help Your Next Project</h4>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An .ac porta sem turpis quis leo. Nulla in
          feugiat elit.
        </p>
        <div class="about-gri">
          <div class="about-in">
            <h5>1. Problem Solving</h5>
          </div>

          <div class="about-in">
            <h5>2. Creative Idea</h5>
          </div>

          <div class="about-in">
            <h5>3. Search a lot</h5>
          </div>

          <div class="about-in">
            <h5>4. High Quality</h5>
          </div>
        </div>
        <a href="#" class="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default AboutMeUI;
