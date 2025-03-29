import React from "react";
import "./smartlocks.css";
import mainLock from "../../img/24.jpg";

// Import all lock images
import lock1 from "../../img/touch/1.png";
import lock2 from "../../img/touch/2.png";
import lock3 from "../../img/touch/3.png";
import lock4 from "../../img/touch/4.png";
import lock5 from "../../img/touch/5.jpg";
import lock6 from "../../img/touch/6.png";
import lock7 from "../../img/touch/7.png";
import lock8 from "../../img/touch/8.png";
import lock9 from "../../img/touch/9.png";
import lock10 from "../../img/touch/10.png";

const lockData = [
  {
    id: 1,
    image: lock1,
    name: "TOUCH SCREEN REMOTE",
    features: [
      "2.5 Inch Touch Screen and Physical Button Portable Remote to control all smart home devices. Comes with Charging dock.",
    ],
  },
  {
    id: 2,
    image: lock2,
    name: "4 INCH TOUCH PANEL",
    features: [
      "4 Inch Touch Panel to control all smart home devices with In-Built Alexa and Zigbee+BLE gateway",
    ],
  },
  {
    id: 3,
    image: lock3,
    name: "6 INCH TOUCH PANEL",
    features: [
      "6 Inch Touch Panel to control all smart home devices with Knob and In- Built Bluetooth To connect to external speakers and Zigbee+BLE gateway",
    ],
  },
  {
    id: 4,
    image: lock4,
    name: "CURTAIN MOTOR/CONTROLLER",
    features: ["Controlls all types of Curtains. "],
  },
  {
    id: 5,
    image: lock5,
    name: "3.5 INCH TOUCH PANEL",
    features: [
      "3.5 Inch Touch Panel with 3 Physical Buttons (Relay/Scene/Shortcuts) to control all smart home devices with In-Built IR and BLE Gateway",
    ],
  },
  {
    id: 6,
    image: lock6,
    name: "GATEWAY",
    features: [
      "Zigbee, IFTT, Matter, Thread & Bluetooth BLE Direct Plug Gateway",
    ],
  },
  {
    id: 7,
    image: lock7,
    name: "IR BLASTER",
    features: [
      "IR Blaster to control all IR Appliances in a room (Such as TV/AC/Music System)",
    ],
  },
  {
    id: 8,
    image: lock8,
    name: "RETRO-FIT SWITCH CONTROLER",
    features: ["Multi channel Retro-Fit Devices"],
  },
  {
    id: 9,
    image: lock9,
    name: "WIRELESS SCENE CONTROLLER",
    features: [
      "4 Button / 12 Scene Wireless Zigbee Scene Controller With LED Indicator",
    ],
  },
  {
    id: 10,
    image: lock10,
    name: "SENSORS",
    features: [
      "These advanced sensors detect motion, temperature, humidity, light, and more, seamlessly integrating with your home automation system.",
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

const TouchPanels = () => {
  return (
    <section className="smlock py">
      <div className="container">
        <h2>Touch Panels</h2>
        <div className="smlock-wrapper">
          <div className="smlock-content smlocks-2">
            <div className="main-lock touch-lock">
              <img src={mainLock} alt="Main Lock" />
              <div className="content">
                <h3>Your home, your control</h3>
                <p>
                  NeoNest Smart Touch Panels put automation at your fingertips.
                </p>
              </div>
            </div>
            <div className="locks">
              {lockData.slice(0, 4).map((lock) => (
                <LockCard key={lock.id} {...lock} />
              ))}
            </div>
          </div>
          <div className="smlock-content">
            <div className="locks">
              {lockData.slice(4).map((lock) => (
                <LockCard key={lock.id} {...lock} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchPanels;
