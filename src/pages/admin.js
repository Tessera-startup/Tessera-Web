import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { API } from "./../services/axios_config";

function AdminPage() {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [eventCount, setEventCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { authData } = useSelector((state) => state.auth);

  const balanceSol = 500;

  const router = useRouter();

  useEffect(() => {
    if (!authData || !authData.user) {
      router.push("/login");
    } else {
      // Call both fetch functions when the component mounts
      fetchEventCount();
      fetchTicketCount();
      setIsLoading(false);
    }
  }, [authData, router]);

  const fetchEventCount = async () => {
    try {
      const response = await API.get("/events/all-events");
      setEventCount(response.data.length);
    } catch (error) {
      console.error("Error fetching event count:", error);
    }
  };

  const fetchTicketCount = async () => {
    try {
      const response = await API.get("/events/all-event-tickets");
      setTicketCount(response.data.length);
    } catch (error) {
      console.error("Error fetching ticket count:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <div className="container p-0 sm:p-8 about relative z-10">
          <h2 className="text-3xl font-semibold mb-4 text-white  mt-16">
            Dashboard {authData?.user?.email}
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
