import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getAllEventsAction } from "../services/actions/userActions";
import { useSelector } from "react-redux";

const EventList = () => {
  // const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const { events } = useSelector(state => state.user)
  const dispatch = useDispatch()


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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events?.slice(0, visibleEvents).map((event) => (
          <Link href={`/event/${event?._id}`} key={event?._id}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-r from-web3blue to-web3purple rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={event?.image}
                  alt={event?.title}
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-t-md"
                />
                <div className="absolute top-0 left-0 m-2 p-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md">
                  {event?.location}
                </div>
              </div>
              <div className="p-3">
                <motion.h3
                  className="text-md sm:text-lg md:text-xl font-medium text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {event?.title}
                </motion.h3>
                <p className="text-gray-400">{event?.date_of_event}</p>
                <p className="text-gray-400">{event?.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-400">
                    {event?.ticket_count}
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
      {visibleEvents < events?.length && (
        <div className="flex justify-center my-4 text-gray-100">
          <button className="button pt-1" onClick={loadMoreEvents}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 pt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div className="text">Load more</div>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EventList;
