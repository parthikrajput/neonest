import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./choose.css";

const slideData = [
  {
    title: "AI Self-Learning Home Capabilities",
    content:
      "Neonest’s smart home systems are powered by AI that learns your daily routines and preferences. From adjusting lighting and temperature to optimizing energy usage, the system adapts to your lifestyle, making your home smarter and more efficient over time.",
  },
  {
    title: "Wired and Wireless Automation",
    content:
      "Neonest offers both wired and wireless automation solutions, ensuring flexibility and compatibility with any home setup. Whether it’s a new construction or a retrofit, Neonest seamlessly integrates into your space.",
  },
  {
    title: "Voice and App Control",
    content:
      "Control your entire home with just your voice or a smartphone app. Compatible with popular voice assistants like Alexa and Google Assistant, Neonest lets you manage lighting, security, climate, and more from anywhere in the world.",
  },
  {
    title: "Smart Security Solutions",
    content:
      "Neonest provides advanced security features, including smart locks, motion sensors, CCTV integration, and real-time alerts. Your home is protected 24/7 with AI-driven threat detection and remote monitoring.",
  },
  {
    title: "Energy Management",
    content:
      "Optimize energy consumption with smart lighting, automated HVAC systems, and energy usage analytics. Neonest helps you save on utility bills while reducing your carbon footprint.",
  },
  {
    title: "Scene Customization",
    content:
      "Create personalized scenes for different moods and occasions. With a single command, you can set up a 'Movie Night' scene (dim lights, close curtains, and turn on the home theater) or a 'Good Morning' scene (open blinds, brew coffee, and play your favorite music).",
  },
  {
    title: "Easy Upgrades and Scalability",
    content:
      "Neonest’s modular design allows you to start small and expand your system as needed. Whether you want to add new devices or upgrade existing ones, the system grows with your needs.",
  },
  {
    title: "Smart Lighting and Climate Control",
    content:
      "Automate lighting based on time of day, occupancy, or natural light levels. Control your home’s temperature with smart thermostats that adjust to your preferences and weather conditions.",
  },
  {
    title: "Integration with Third-Party Devices",
    content:
      "Neonest seamlessly integrates with a wide range of third-party devices and platforms, ensuring a unified smart home experience. From smart TVs to kitchen appliances, everything works together effortlessly.",
  },
  {
    title: "Remote Monitoring and Notifications",
    content:
      "Stay connected to your home no matter where you are. Receive real-time notifications about security breaches, water leaks, or unusual activity, and take action instantly through the app.",
  },
  {
    title: "Multi-Zone Audio and Entertainment",
    content:
      "Enjoy a connected entertainment experience with multi-zone audio and video distribution. Stream music or movies to any room in the house with just a tap on your phone.",
  },
  {
    title: "Smart Blinds and Curtains",
    content:
      "Automate your window treatments to open and close based on time of day, sunlight, or your preferences. Enhance privacy, energy efficiency, and comfort with smart blinds and curtains.",
  },
];

const Choose = () => {
  return (
    <section className="choose">
      <div className="container">
        <h2>Why Choose Neonest?</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <h3>{slide.title}</h3>
              <div className="content">
                <p>{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Choose;
