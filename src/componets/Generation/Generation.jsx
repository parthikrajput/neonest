import React from "react";
import generation from "../../img/38.jpg";
import "./generation.css";

const Generation = () => {
  return (
    <section className="py generation" id="services">
      <div className="container">
        <div className="genera-wrapper">
          <div className="gene-img">
            <img src={generation} alt="" />
          </div>
          <div className="gene-content">
            <h2>neonest the next generation of smart homes</h2>

            <div className="genes">
              <div className="gene">
                <div className="icon"></div>
                <h3>SCALABLE SOLUTIONS</h3>
                <p>
                  Start with a Basic package and upgrade to Elite or Premium as
                  your needs grow.
                </p>
              </div>
              <div className="gene">
                <div className="icon"></div>
                <h3>CUSTOMIZATION</h3>
                <p>
                  Tailor your smart home system to suit your lifestyle and
                  preferences.
                </p>
              </div>{" "}
              <div className="gene">
                <div className="icon"></div>
                <h3>RELIABILITY AND SECURITY</h3>
                <p>
                  Industry-leading technology with robust security features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generation;
