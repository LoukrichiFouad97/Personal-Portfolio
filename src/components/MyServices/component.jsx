import React from "react";

import ServiceOne from "../../assets/serv1.png";
import ServiceTwo from "../../assets/serv2.png";
import ServiceThree from "../../assets/serv3.png";

function MyServicesUI() {
  const services = [
    {
      title: "Mobile App Design",
      image: ServiceOne,
      body: " Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy",
    },
    {
      title: "Website Design",
      image: ServiceTwo,
      body: " Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy",
    },
    {
      title: "Video Editing",
      image: ServiceThree,
      body: " Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting Industry. Lorem Ipsum Has Been The Website Industry's Standard Dummy",
    },
  ];

  const renderServices = services.map((service, index) => {
    return (
      <div className="box" key={index + 1}>
        <img src={service.image} alt="" />
        <h3>{service.title}</h3>
        <p>{service.body}</p>
      </div>
    );
  });
  return (
    <section class="services" id="services">
      <div className="container">
        <div class="main-text">
          <h2>My Services</h2>
          <h4>Better Design, Better Expericences</h4>
        </div>

        <div class="services-content">{renderServices}</div>
      </div>
    </section>
  );
}

export default MyServicesUI;
