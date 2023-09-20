import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import EventList from "../components/EventList";

function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <EventList/>
    </div>
  );
}

export default Home;
