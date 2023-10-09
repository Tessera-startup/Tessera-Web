import Link from "next/link";
import { FiHome, FiPlusCircle, FiCalendar } from "react-icons/fi";

import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="flex container mx-auto relative z-10">
      <div className="text-white w-16 lg:w-64 min-h-screen p-4 mt-20 bg-slate-500 rounded-md">
        <ul className="space-y-4">
          <li>
            <Link href="/admin" className="flex items-center">
              <FiHome className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/events" className="flex items-center">
              <FiCalendar className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Events</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/create-event" className="flex items-center">
              <FiPlusCircle className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Create Event</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/admin-tickets" className="flex items-center">
              <FiCalendar className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Tickets</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 pr-6">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
