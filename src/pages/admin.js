import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function AdminPage() {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [eventCount, setEventCount] = useState(null); // State to store event count
  const [isLoading, setIsLoading] = useState(true);
  const { authData } = useSelector((state) => state.auth);

  // Mock data for event counts, ticket counts, and balance (sol)
  const ticketCount = 100;
  const balanceSol = 500;

  const router = useRouter();
  // Check if the user is logged in
  useEffect(() => {
    if (!authData || !authData.user) {
      // Redirect to login or handle unauthorized access
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [authData, router]);

  // Fetch the total number of events
  const fetchEventCount = async () => {
    try {
      const response = await fetch(
        "https://tessera-api.onrender.com/events/all-events"
      );
      const data = await response.json();
      setEventCount(data.length);
      console.log("Event count:", data.length);
    } catch (error) {
      console.error("Error fetching event count:", error);
    }
  };

  useEffect(() => {
    fetchEventCount(); // Call the function when the component mounts
  }, []);

  if (isLoading || eventCount === null) {
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
