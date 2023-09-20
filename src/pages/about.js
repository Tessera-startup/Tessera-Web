import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-8 p-4 sm:p-0">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p>
          Welcome to our platform! We are passionate about bringing people
          together through exciting events and experiences. Our mission is to
          provide a seamless and secure ticketing solution for both event
          organizers and attendees.
        </p>
        <p className="mt-4">
          At our core, we believe that every event is a unique opportunity for
          people to connect, learn, and have fun. Whether it's a tech
          conference, a music festival, an art exhibition, or any other event,
          we are here to make the ticketing process as smooth as possible.
        </p>
        <p className="mt-4">
          Our platform offers features like decentralized ticketing with NFTs,
          event filtering and search, and a user-friendly interface. We are
          constantly innovating and striving to provide the best possible
          experience for our users.
        </p>
        <p className="mt-4">
          Thank you for choosing us as your ticketing partner. We look forward
          to helping you discover and attend amazing events!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
