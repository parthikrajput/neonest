import React from "react";
import life from "../../img/39.jpg";
import "./lifestyle.css";

const Lifestyle = () => {
  return (
    <section className="lifestyle">
      <div className="container">
        <div className="lifestyle-wrapper">
          <div className="lifestyle-img">
            <h2>How NeoNest Transforms Your Lifestyle</h2>
            <img src={life} alt="Lifestyle" />
          </div>
          <div className="lifestyle-content">
            <div className="life-list">
              <h3>1. Effortless Home Monitoring</h3>
              <ul>
                <li>
                  Keep an eye on kids, elderly family members, and pets
                  remotely.
                </li>
                <li>
                  Smart biometric security ensures only authorized access.
                </li>
              </ul>
            </div>

            <div className="life-list">
              <h3>2. Energy-Efficient Living</h3>
              <ul>
                <li>
                  Smart lighting and cooling systems reduce unnecessary power
                  consumption.
                </li>
              </ul>
            </div>

            <div className="life-list">
              <h3>3. Advanced Security & Intruder Protection</h3>
              <ul>
                <li>Get real-time alerts when someone is at your door.</li>
                <li>
                  Biometric access and remote monitoring keep your home secure,
                  even when you’re away.
                </li>
              </ul>
            </div>

            <div className="life-list">
              <h3>4. Ultimate Home Automation</h3>
              <ul>
                <li>
                  Control all smart appliances through voice commands or the
                  NeoNest app.
                </li>
                <li>
                  Never worry about leaving devices on when you’re not home.
                </li>
              </ul>
            </div>

            <div className="life-list">
              <h3>5. Cost Savings on Home Insurance</h3>
              <ul>
                <li>
                  Smart-tech features may lower insurance premiums, offering
                  additional savings.
                </li>
              </ul>
            </div>

            <div className="life-list">
              <h3>6. Fully Customizable Smart Living</h3>
              <ul>
                <li>
                  Create your perfect ambiance with automated lighting and
                  temperature settings.
                </li>
                <li>
                  Personalize your home’s automation for a seamless, luxury
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
