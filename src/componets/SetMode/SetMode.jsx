import React from "react";
import mode from "../../img/3.jpg";
import "./setmode.css";

const SetMode = () => {
  return (
    <section className="py setmode" id="future">
      <div className="container">
        <div className="setmode-wrapper">
          <h2>set your mode</h2>

          <div className="setmode-img">
            <img src={mode} alt="set mode" />
          </div>

          <div className="setmode-content">
            <div className="content">
              <div className="sub-title">
                <h3>GOOD MORNING</h3>
                <p>
                  Start a beautiful day with Neonest. The curtains can
                  automatically open to let the sunshine in. Air purifier,
                  bathroom light, and the coffee maker can all be turned on with
                  a single press of a button.
                </p>
              </div>
              <h4>
                Set a specific wake-up time and Neonest will automatically
              </h4>
              <ul>
                <li>Turn off the night light.</li>
                <li> Open the curtains.</li>
                <li> Turn on the coffee maker.</li>
                <li> Turn on the lights.</li>
                <li> Turn on the air purifier.</li>
                <li> Disable the alert mode.</li>
              </ul>
            </div>
            <div className="content">
              <div className="sub-title">
                <h3>GOOD NIGHT</h3>
                <p>
                  Time to say good night. Simply say "Good Night" to your voice
                  assistant to turn off all lights, close all curtains, and
                  activate the Alert Mode.
                </p>
              </div>{" "}
              <h4>Say "Hey Siri, Good Night, Neonest will automatically</h4>
              <ul>
                <li>Set a comfortable temperature in bedroom.</li>
                <li>Turn off the lights in the entire house.</li>
                <li>Close the curtains.</li>
                <li>Enable the alert mode</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetMode;
