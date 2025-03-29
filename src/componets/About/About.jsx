import React from "react";
import about from "../../img/about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about py">
      <div className="container">
        <div className="about-wrapper">
          <div className="content">
            <h2>About Neonest</h2>
            <p>
              Neonest is a recognized brand in the realm of smart home
              automation, with a strong international presence in Beijing,
              China, and the UAE. Brought to India by Technometics, a trusted IT
              services provider with decades of expertise, Neonest is redefining
              the future of living spaces. Specializing in premium to economical
              smart home automation systems, Neonest offers cutting-edge
              features such as AI self-learning home capabilities, wired and
              wireless automation, easy upgrade options, and reliable, scalable,
              and secure solutions. Whether it’s transforming your home into an
              intelligent living space or ensuring seamless control and
              security, Neonest delivers innovation at every step
            </p>
          </div>

          <div className="about-img">
            <img src={about} alt="about neonest" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
