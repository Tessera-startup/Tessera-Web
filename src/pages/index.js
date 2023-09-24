import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import EventList from "../components/EventList";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="gradient fixed"></div>
      <HeroSection />
      <EventList />
      <br />
    </Layout>
  );
}

export default Home;
