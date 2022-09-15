import React from "react";

import ServiceOne from "../../assets/serv1.png";
import ServiceTwo from "../../assets/serv2.png";
import ServiceThree from "../../assets/serv3.png";

function MyServicesUI() {
  return (
    <section class="services" id="services">
      <div class="main-text">
        <h2>My Services</h2>
        <h4>Better Design, Better Expericences</h4>
      </div>

      <div class="services-content">
        <div class="box">
          <img src={ServiceOne} />
          <h3>Mobile App Design</h3>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
            Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy
            .
          </p>
        </div>

        <div class="box">
          <img src={ServiceTwo} />
          <h3>Website Design</h3>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
            Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy
            .
          </p>
        </div>

        <div class="box">
          <img src={ServiceThree} />
          <h3>Video Editing</h3>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
            Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyServicesUI;
