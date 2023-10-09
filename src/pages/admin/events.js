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

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-2">
          <Link className="flex items-center mt-20 mb-5 text-gray-400" href="/">
            <IoMdArrowBack /> <span className="ml-2">Go back</span>
          </Link>
          <p className="text-white">Events created</p>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Event
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>

              </tr>
            </thead>
            <tbody>
              {events?.map((event, i) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {event?.name}
                  </th>
                  <td class="px-6 py-4">
                    {event?.location}
                  </td>
                  <td class="px-6 py-4">
                    {event?.date_of_event}
                  </td>
                  <td class="px-6 py-4">
                    ${event?.amount}
                  </td>

                </tr>
              ))}



            </tbody>
          </table>
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
