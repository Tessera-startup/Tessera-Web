import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  getAllEventsAction,
  setCurrentEvent,
} from "../services/actions/userActions";
import { useSelector } from "react-redux";
import ImageUrl from "../../public/hero-image.jpg";

const EventList = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const { events, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAction());
  }, []);

  const loadMoreEvents = () => {
    setVisibleEvents(visibleEvents + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-4 md:px-4 sm:p-0 relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 web3-gradient"
      >
        Upcoming Events
      </motion.h2>
      {loading ? (
        <p className="text-white font-bold text-2xl">Loading events...</p>
      ) : !events || events.length === 0 ? (
        <p className="text-white font-bold text-2xl">No events available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {events?.slice(0, visibleEvents).map((event) => (
            <Link
              onClick={() => dispatch(setCurrentEvent({ data: event }))}
              href={`/event/${event?._id}`}
              key={event?._id}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-r from-web3blue to-web3purple rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 blog-header-image border border-gray-700 flex flex-col"
              >
                <div
                  className="relative "
                >
                  <Image
                    src={event.image ?? ImageUrl}
                    alt={event?.name}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                    style={{
                      flex: "1 0 0%",
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                  <div className="absolute top-0 left-0 m-2 p-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md">
                    {event?.location}
                  </div>
                </div>
                <div className="px-3 pt-5 pb-10 flex flex-col">
                  <motion.h3
                    className="text-md sm:text-lg md:text-2xl font-bold text-white"
                    whileHover={{ scale: 1.01 }}
                  >
                    {event?.name}
                  </motion.h3>
                  <hr className="btn-transparent my-3" />
                  <p className="text-gray-400">{event?.date_of_event}</p>
                  <p className="text-gray-400">{event?.location}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-400">
                      {event?.ticket_count}
                    </p>
                    <motion.p
                      whileHover={{ scale: 1.05 }}
                      className="text-sm sm:text-md md:text-lg text-gray-100 bg-gradient-to-r from-web3blue to-web3purple rounded-full cursor-pointer focus:outline-none"
                    >
                      Get Ticket
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
      {visibleEvents < events?.length && (
        <div className="flex justify-center my-4 text-gray-100">
          <button onClick={loadMoreEvents}>
            <div className="text">Load more</div>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EventList;
