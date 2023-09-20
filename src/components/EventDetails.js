// components/EventDetail.js
import React from "react";

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Price: $10</p>
      <button className="text-lg bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
        Get Ticket
      </button>
    </div>
  );
};

export default EventDetail;
