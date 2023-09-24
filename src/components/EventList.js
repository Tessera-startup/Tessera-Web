import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { intialEvents } from "../../data/events";

const EventList = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);

  const loadMoreEvents = () => {
    setVisibleEvents(visibleEvents + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto mt-8 p-4 md:px-4 sm:p-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 web3-gradient"
      >
        Upcoming Events
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {intialEvents.slice(0, visibleEvents).map((event) => (
          <Link href={`/event/${event.id}`} key={event.id}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-r from-web3blue to-web3purple rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
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
                <div className="absolute top-0 left-0 m-2 p-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md">
                  {event.category}
                </div>
              </div>
              <div className="p-3">
                <motion.h3
                  className="text-md sm:text-lg md:text-xl font-medium text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {event.title}
                </motion.h3>
                <p className="text-gray-400">{event.date}</p>
                <p className="text-gray-400">{event.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-400">
                    $10
                  </p>
                  <motion.p
                    className="text-sm sm:text-md md:text-lg text-gray-400 cursor-pointer"
                    whileHover={{ textDecoration: "underline" }}
                  >
                    Get Ticket
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {visibleEvents < intialEvents.length && (
        <div className="flex justify-center my-4">
          <button
            onClick={loadMoreEvents}
            className="text-sm sm:text-md md:text-lg bg-gray-600 text-gray-400 px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EventList;
