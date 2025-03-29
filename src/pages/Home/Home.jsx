import React from "react";
import Hero from "../../componets/Hero/Hero";
import About from "../../componets/About/About";
import Choose from "../../componets/Choose/Choose";
import SetMode from "../../componets/SetMode/SetMode";
import SmartLocks from "../../componets/SmartLocks/SmartLocks";
import TouchPanels from "../../componets/SmartLocks/touchPanels";
import Switches from "../../componets/SmartLocks/Switches";
import Generation from "../../componets/Generation/Generation";
import Lifestyle from "../../componets/Lifestyle/Lifestyle";
import HomeLiving from "../../componets/HomeLiving/HomeLiving";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Choose />
      <SetMode />
      <SmartLocks />
      <TouchPanels />
      <Switches />
      <Generation />
      <Lifestyle />
      <HomeLiving />
    </main>
  );
};

export default Home;
