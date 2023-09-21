import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mt-10 p-4 md:px-4 sm:p-0 mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-gray-600">
          At our core, we are driven by a singular mission: to empower event
          creators with the limitless potential of decentralized technology,
          elevating event experiences to new heights
        </h2>

        <div>
          <Image
            src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646398956/website/about-crowd.png"
            height={500}
            width={800}
            layout="responsive"
            alt="Event Crowd"
          />
        </div>

        <p className="text-xl sm:text-2xl font-semibold text-gray-600">
          Welcome to our platform! We are passionate about bringing people
          together through exciting events and experiences. Our mission is to
          provide a seamless and secure ticketing solution for both event
          organizers and attendees.
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-600">
          At our core, we believe that every event is a unique opportunity for
          people to connect, learn, and have fun. Whether it's a tech
          conference, a music festival, an art exhibition, or any other event,
          we are here to make the ticketing process as smooth as possible.
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-600">
          Our platform offers features like decentralized ticketing with NFTs,
          event filtering and search, and a user-friendly interface. We are
          constantly innovating and striving to provide the best possible
          experience for our users.
        </p>

        <p className="mt-4 mb-10 text-xl sm:text-2xl font-semibold text-gray-600">
          Thank you for choosing us as your ticketing partner. We look forward
          to helping you discover and attend amazing events!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
