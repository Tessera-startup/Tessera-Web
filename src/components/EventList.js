import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { intialEvents } from "../../data/events";

const EventList = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);

  const loadMoreEvents = () => {
    setVisibleEvents(visibleEvents + 3);
  };

  return (
    <div className="container mx-auto mt-8 p-4 md:px-4 sm:p-0">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-0">
        {intialEvents.slice(0, visibleEvents).map((event) => (
          <Link href={`/event/${event.id}`} key={event.id}>
            <div className="bg-white m-4 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <div className="relative">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width={640}
                  height={480}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-t-md"
                />
                <div className="absolute top-0 left-0 m-2 p-1 bg-gray-800 text-white text-sm rounded-md">
                  {event.category}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">$10</p>
                    <a className="text-lg text-gray-600 hover:underline">Get Ticket</a>
               
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleEvents < intialEvents.length && (
        <div className="flex justify-center my-4">
          <button
            onClick={loadMoreEvents}
            className="text-lg bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default EventList;
