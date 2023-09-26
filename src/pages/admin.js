import React, { useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { intialEvents } from "../../data/events";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";

function AdminPage() {
  const [visibleEvents, setVisibleEvents] = useState(3);

  // Mock data for event counts, ticket counts, and balance (sol)
  const eventCount = 25;
  const ticketCount = 100;
  const balanceSol = 500;

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <div className="container p-0 sm:p-8 about relative z-10">
          <h2 className="text-3xl font-semibold mb-4 text-white  mt-16">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Event Counts Card */}
            <div className="btn-transparent p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#e2e8ff] mb-2">
                Event Counts
              </h3>
              <p className="text-3xl font-bold text-green-400">{eventCount}</p>
            </div>

            {/* Ticket Counts Card */}
            <div className="btn-transparent p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#e2e8ff] mb-2">
                Ticket Counts
              </h3>
              <p className="text-3xl font-bold text-blue-400">{ticketCount}</p>
            </div>

            {/* Balance (Sol) Card */}
            <div className="btn-transparent p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#e2e8ff] mb-2">
                Balance (Sol)
              </h3>
              <p className="text-3xl font-bold text-yellow-400">{balanceSol}</p>
            </div>
          </div>
        </div>
      </Dashboard>
    </Layout>
  );
}

export default AdminPage;
