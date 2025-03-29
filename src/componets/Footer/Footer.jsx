import React from "react";
import { Link } from "react-scroll";
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../img/logo.png";
import "./footer.css";
import bg from "../../img/5.jpg";

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="contact">
          <Link to="/" className="logo">
            <img src={logo} alt="NeoNest Logo" />
          </Link>

          <div className="contact-details">
            <div className="contact-detail">
              <FaPhone className="icon" />
              <a href="tel:+919422481711">+91 94224 81711</a>
            </div>
            <div className="contact-detail">
              <FaGlobe className="icon" />
              <a
                href="http://www.neonestx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.neonestx.com
              </a>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="icon" />
              <a href="mailto:info@neonestx.com">info@neonestx.com</a>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt className="icon" />
              <span>Neonest, Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
