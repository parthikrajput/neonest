import React from "react";
import "./smartlocks.css";
import mainLock from "../../img/16.jpg";

// Import all lock images
import lock1 from "../../img/lock/1.jpg";
import lock2 from "../../img/lock/2.png";
import lock3 from "../../img/lock/3.png";
import lock4 from "../../img/lock/4.png";
import lock5 from "../../img/lock/5.png";
import lock6 from "../../img/lock/6.png";
import lock7 from "../../img/lock/7.png";
import lock8 from "../../img/lock/8.png";
import lock9 from "../../img/lock/9.png";
import lock10 from "../../img/lock/10.png";

const lockData = [
  {
    id: 1,
    image: lock1,
    name: "K300",
    features: [
      "Smart Lock With 3D Face Recognition+Fingerprint+RF ID+Passcode+OTP+App Unlock+Manual Keys.",
      "2 Way Communication from App",
      "Door Thickness 35mm - 70mm.",
    ],
  },
  {
    id: 2,
    image: lock2,
    name: "K703",
    features: [
      "Ultra Thin Smart Lock with 3D Face Recognition+Fingerprint+RF ID+Passcode+OTP+App Unlock+Manual Keys.",
      "Door Thickness 35mm - 70mm.",
    ],
  },
  {
    id: 3,
    image: lock3,
    name: "K390",
    features: [
      "Ultra Thin Smart Lock with Fingerprint+RF ID+Passcode+OTP+App Unlock+Manual Keys.",
      "Door Thickness 35mm-55mm With Manual Handle.",
    ],
  },
  {
    id: 4,
    image: lock4,
    name: "S1",
    features: [
      "WiFi Lock With Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
      "Door Thickness 35mm-70mm.",
      "Zigbee Lock With Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
    ],
  },
  {
    id: 5,
    image: lock5,
    name: "K608",
    features: [
      "Smart Lock With Fingerprint+RF ID+Passcode+OTP+App Unlock+Manual Keys.",
      "Door Thickness 35mm - 55mm.",
      "Passage Mode For Unlocking without Authentication.",
    ],
  },
  {
    id: 6,
    image: lock6,
    name: "S2",
    features: [
      "WiFi Lock With Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
      "Door Thickness 35mm-70mm.",
    ],
  },
  {
    id: 7,
    image: lock7,
    name: "S200",
    features: [
      "Smart Handle Lock With Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
      "Door Thickness 35mm-55mm.",
    ],
  },
  {
    id: 8,
    image: lock8,
    name: "S3",
    features: [
      "WiFi Lock With Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
      "Door Thickness 35mm-70mm.",
    ],
  },
  {
    id: 9,
    image: lock9,
    name: "L40",
    features: [
      "BLE Smart Drawer Lock With Fingerprint+Manual USB Keys.",
      "Door Thickness up to 55mm.",
    ],
  },
  {
    id: 10,
    image: lock10,
    name: "S4",
    features: [
      "WiFi Lock With Face Recognition+Fingerprint+RF ID+Passcode+OTP+APP Unlock+Manual Keys.",
      "Door Thickness 35mm-70mm.",
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

const SmartLocks = () => {
  return (
    <section className="smlock">
      <div className="container">
        <h2>Smart Locks</h2>
        <div className="smlock-wrapper">
          <div className="smlock-content smlocks-2">
            <div className="main-lock">
              <img src={mainLock} alt="Main Lock" />
              <div className="content">
                <h3>No keys, no worries</h3>
                <p>
                  NeoNest's Smart Door Lock keeps your home safe with
                  intelligent access control.
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

export default SmartLocks;
