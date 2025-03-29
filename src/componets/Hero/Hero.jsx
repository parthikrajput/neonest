import React from "react";
import "./hero.css";
import bgvideo from "../../video/hero.mp4";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video src={bgvideo} autoPlay muted loop></video>
      <div className="overlay"></div>
      <div className="container">
        <div className="content">
          <h1>
            welcome to neonest where technology meets{" "}
            <span>lifestyle your home</span>, your way
          </h1>

          <Link to="contact" smooth={true} duration={500} className="btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
