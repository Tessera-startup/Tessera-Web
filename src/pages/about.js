import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container p-4 sm:p-8 about">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
          Our Mission
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-lg">
          Welcome to our platform! We are passionate about bringing people
          together through exciting events and experiences. Our mission is to
          provide a seamless and secure ticketing solution for both event
          organizers and attendees.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-lg">
          At our core, we believe that every event is a unique opportunity for
          people to connect, learn, and have fun. Whether it's a tech
          conference, a music festival, an art exhibition, or any other event,
          we are here to make the ticketing process as smooth as possible.
        </p>
        <p className="mt-4 mb-8 text-base sm:text-lg text-gray-300 max-w-lg about-description-gradient">
          Thank you for choosing us as your ticketing partner. We look forward
          to helping you discover and attend amazing events!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;





