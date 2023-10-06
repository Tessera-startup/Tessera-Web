import { API } from "../../services/axios_config";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const { authData } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!authData || !authData.user) {
      router.push("/login");
    } else {
      fetchEventsData();
    }
  }, [authData, router]);

  const fetchEventsData = async () => {
    try {
      const response = await API.get("/events/user-events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const loadMoreEvents = () => {
    setVisibleEvents(visibleEvents + 3);
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <Link className="flex items-center mt-32 mb-5 text-gray-400" href="/">
          <IoMdArrowBack /> <span className="ml-2">Go back</span>
        </Link>
        <div className="event-content p-0 sm:p-8 about relative z-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">All Events</h2>
          {Array.isArray(events) &&
            events.slice(0, visibleEvents).map((event) => (
              <Link href={`/event/${event.id}`} key={event.id}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="blog-card rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  <div className="relative">
                    <Image
                      src={event?.image} // Adjust this based on your API response
                      alt={event.title}
                      width={640}
                      height={480}
                      layout="responsive"
                      objectFit="cover"
                      className="blog-header-image"
                    />
                    <div className="absolute top-0 left-0 m-2 p-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md">
                      {event.location} location
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
                        {event.amount}
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
        {visibleEvents < events.length && (
          <div className="flex justify-center mb-10 text-gray-100">
            <button className="button" onClick={loadMoreEvents}>
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
      </Dashboard>
    </Layout>
  );
}

export default AdminEventsPage;
