import React from "react";

function ContactMeUI() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__text">
          <h2>Contact Me</h2>
          <h4>Let's Work Together</h4>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry
          </p>
          <div className="contact__list">
            <li>
              <a href="#">Ain el melh - Msila - Algeria</a>
            </li>
            <li>
              <a href="#">admin@example.com</a>
            </li>
            <li>
              <a href="#">01646895741</a>
            </li>
          </div>
          <div className="contact__icons">
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-behance"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-dribbble"></i>
            </a>
          </div>
        </div>

        <div className="contact__form">
          <form action="">
            <input type="" placeholder="John Doe" required />
            <input type="email" placeholder="Example@mail.com" required />
            <input type="" placeholder="Enter Your Subject" />
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" className="send" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMeUI;
