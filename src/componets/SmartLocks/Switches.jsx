import React from "react";
import "./smartlocks.css";
import mainLock from "../../img/29.jpg";

// Import all lock images
import lock1 from "../../img/30.png";
import lock2 from "../../img/31.png";
import lock3 from "../../img/32.png";

import l1 from "../../img/35.png";
// import l2 from "../../img/36.png";
import l3 from "../../img/37.png";

const lockData = [
  {
    id: 1,
    image: lock1,
    name: "8 SWITCHES (4M)",
    features: [
      "Toggle / Scene / 2-way. Zigbee Smart Touch Switch  with Glass Panel Touch 2.5D Switch with Curved Bezel.",
      "Customization of Icons Available. Face Plate  (White/Black). Bezel (Gold/Silver/Black).",
    ],
  },
  {
    id: 2,
    image: lock2,
    name: "4 SWITCHES + 1 5PIN SOCKET + TYPE A + TYPE C USB (4M)",
    features: [
      "Toggle / Scene / 2-way. Zigbee Smart Touch Switch  with Glass Panel Touch 2.5D Switch with Curved Bezel.",
      "Customization of Icons Available. Face Plate  (White/Black). Bezel (Gold/Silver/Black).",
    ],
  },
  {
    id: 3,
    image: lock3,
    name: "8 SWITCHES + 1 5PIN SOCKET + TYPE A + TYPE C USB (6M/8M)",
    features: [
      "Toggle / Scene / 2-way. Zigbee Smart Touch Switch with  Glass Panel Touch 2.5D Switch with Curved Bezel.",
      "Customization of Icons Available. Face Plate  (White/Black). Bezel (Gold/Silver/Black)",
    ],
  },
];

const LockCard = ({ image, name, features }) => (
  <div className="lock">
    <div className="lock-img">
      {" "}
      <img src={image} alt={name} />
    </div>
    <div className="content">
      <h4>{name}</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Switches = () => {
  return (
    <section className="smlock">
      <div className="container">
        <h2>touch switches</h2>
        <div className="smlock-wrapper">
          <div className="smlock-content smlocks-2">
            <div className="main-lock touch-lock touch-switch">
              <img src={mainLock} alt="Main Lock" />
              <div className="content">
                <h3>Tap, Control, Transform</h3>
                <p>NeoNest Smart Switches for an effortless lifestyle</p>
              </div>
            </div>
            {/* <div className="locks">
              {lockData.slice(0, 4).map((lock) => (
                <LockCard key={lock.id} {...lock} />
              ))}
            </div> */}
          </div>
          <div className="smlock-content">
            <div className="locks">
              {lockData.slice(0).map((lock) => (
                <LockCard key={lock.id} {...lock} />
              ))}
            </div>
          </div>
        </div>

        <div className="switches-content">
          <div className="sw-content">
            <h4>SUPPORTED PROTOCOLS:</h4>
            <p>
              Neonest’s advanced protocol support enables real-time automation,
              minimal latency, and smooth device communication, ensuring a truly
              connected living space.
            </p>
            <div className="logos">
              <img src={l1} alt="logo" />
              {/* <img src={l2} alt="logo" /> */}
              <img src={l3} alt="logo" />
            </div>
          </div>

          <div className="sw-content">
            <h4>CROSS-PLATFORM COMPATIBILITY:</h4>
            <p>
              Neonest products are integrated with major third-party platforms
              such as Apple Home, Google Home, Amazon Alexa and Samsung
              SmartThings and more.
            </p>
            <p>
              Speak your way to convenience with NeoNest. Designed for seamless
              integration, our smart home solutions let you control devices with
              natural voice commands, offering a truly hands-free and
              intelligent living experience
            </p>
            <div className="logos">
              <img src={l1} alt="logo" />
              {/* <img src={l2} alt="logo" /> */}
              <img src={l3} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Switches;
