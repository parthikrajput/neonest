import React from "react";
import living from "../../img/4.jpg";
import "./living.css";

const HomeLiving = () => {
  return (
    <section className="py living">
      <div className="container">
        <div className="living-wrapper">
          <div className="living-content">
            <h2>the future of home living is here</h2>

           <div className="text">
           <p>
              Step into a world where innovation meets comfort. Imagine a home
              that listens, responds, and adapts to your needs effortlessly.
              With cutting-edge smart home automation and AI-driven living
              solutions, we bring you a lifestyle that’s secure, efficient, and
              truly intelligent.
            </p>
            <p>
              From voice-controlled lighting to energy-efficient climate
              control, experience the next generation of modern living—where
              luxury meets technology at your fingertips.
            </p>
            <p>WELCOME TO THE FUTURE. WELCOME HOME</p>
           </div>
          </div>

          <div className="living-img">
            <img src={living} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLiving;
