import Link from "next/link";
import { FiHome, FiPlusCircle } from "react-icons/fi"; // Import the icons you want to use
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="flex container mx-auto relative z-10">
      <div className="text-white w-16 lg:w-64 min-h-screen p-4 mt-20">
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="flex items-center">
              <FiHome className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/create-event" className="flex items-center">
              <FiPlusCircle className="mr-2 text-3xl lg:text-xl" />{" "}
              <span className="lg:inline-block hidden">Create An Event</span>
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
