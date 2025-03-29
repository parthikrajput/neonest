import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../img/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "future", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);

      // Add scrolled class if scroll position is greater than 130px
      setIsScrolled(window.scrollY > 130);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="h-wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="neonest" />
          </Link>

          <nav className={navOpen ? "nav-open" : ""}>
            {["home", "about", "services", "future"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className={activeSection === item ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`mb ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Contact Us
            </Link>

            <div className="close" onClick={() => setNavOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#111022"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>
          </nav>

          <div className="h-btn">
            <Link to="contact" smooth={true} duration={500} className="btn">
              Contact Us
            </Link>

            <div className="menu" onClick={() => setNavOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#fff"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
