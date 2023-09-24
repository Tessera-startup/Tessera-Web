import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container p-32  md:px-4 sm:p-30 about">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-[#ffffff]">
          Our Mission
        </h2>

        <p className="font-semibold text-[#e2e8ff] max-w-lg">
          Welcome to our platform! We are passionate about bringing people
          together through exciting events and experiences. Our mission is to
          provide a seamless and secure ticketing solution for both event
          organizers and attendees.
        </p>

        <p className="mt-4 font-semibold text-[#e2e8ff] max-w-lg">
          At our core, we believe that every event is a unique opportunity for
          people to connect, learn, and have fun. Whether it's a tech
          conference, a music festival, an art exhibition, or any other event,
          we are here to make the ticketing process as smooth as possible.
        </p>
        <p className="mt-4 mb-20 font-semibold text-[#e2e8ff] max-w-lg about-description-gradient">
          Thank you for choosing us as your ticketing partner. We look forward
          to helping you discover and attend amazing events!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
