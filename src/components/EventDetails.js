import React from "react";

const EventDetail = ({ event }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="hero-section relative h-60 md:h-80 lg:h-96">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-8 p-4">
        <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
        <p className="text-lg font-medium">Date: {event.date}</p>
        <p className="text-lg font-medium">Location: {event.location}</p>
        <p className="text-lg font-medium">Price: $10</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">About this Event</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Directions</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div className="mt-8 text-center">
          <button className="text-lg bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
