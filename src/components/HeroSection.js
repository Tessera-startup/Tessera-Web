import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import heroImage from '/public/hero-image.jpg';

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
  };

  return (
    <section className="py-8 md:py-16 fadeIn" style={sectionStyle}>
      <div className="container mx-auto py-8 md:py-16">
        <div className="hero-text text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Tessera
          </h1>
          <p className="text-lg md:text-xl mt-2 text-white">
            Building the Future of Decentralized Ticketing
          </p>
          <div className="flex flex-col md:flex-row md:w-full w-60 mx-auto justify-center mt-4">
            <a
              href="/about"
              className="text-xl md:text-2xl bg-gray-900 text-white px-6 py-2 md:py-3 rounded-md hover:bg-gray-800 transition duration-300 transform hover:scale-105 mb-2 md:mb-0 mr-0 md:mr-4"
            >
              Learn more
            </a>
            <a
              href="/tickets"
              className="text-xl md:text-2xl bg-white text-gray-900 px-6 py-2 md:py-3 rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ml-0 md:ml-4"
            >
              Buy tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
