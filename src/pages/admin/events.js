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
import EventCalender from "../../../public/calendar.png";
import EventName from "../../../public/placard.png";
import EventLocation from "../../../public/placeholder.png";
import EventPrice from "../../../public/money.png";

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
      <div
          className="relative p-4 sm:p-8  z-10  shadow-md sm:rounded-lg ml-2 bg-gray-800"
          style={{ marginTop: "100px" }}
        >
          <Link
            className="flex items-center mb-4 text-white cursor-pointer w-20%"
            href="/admin"
          >
            <IoMdArrowBack /> <span className="ml-2">Go back</span>
          </Link>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Events created
          </h2>
          <div className="table-container about overflow-x-scroll relative">
            <table className="table w-full text-sm text-left text-white">
              <thead className="text-white text-xl uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      <p className="mr-2">Event</p>
                      <Image
                        src={EventName}
                        alt="event"
                        width={30}
                        height={50}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 border-left-transparent">
                    <div className="flex items-center">
                      <p className="mr-2">Location</p>
                      <Image
                        src={EventLocation}
                        alt="event"
                        width={30}
                        height={30}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 border-left-transparent">
                    <div className="flex items-center">
                      <p className="mr-2">Date</p>
                      <Image
                        src={EventCalender}
                        alt="event"
                        width={30}
                        height={30}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 border-left-transparent">
                    <div className="flex items-center">
                      <p className="mr-2">Price</p>
                      <Image
                        src={EventPrice}
                        alt="event"
                        width={30}
                        height={30}
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {events?.map((event, i) => (
                  <tr className="btn-transparent bg-gray-600" key={i}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {event?.name}
                    </th>
                    <td className="px-6 py-4">{event?.location}</td>
                    <td className="px-6 py-4">{event?.date_of_event}</td>
                    <td className="px-6 py-4">${event?.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {visibleEvents < events.length && (
          <div className="flex justify-center mb-10 text-gray-100">
            <button className="button" onClick={loadMoreEvents}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 pt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
