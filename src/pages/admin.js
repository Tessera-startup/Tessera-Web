import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  getEventCountAction,
  getSolanaBalanceAction,
  getTicketCountAction,
} from "../services/actions/userActions";

function AdminPage() {
  const dispatch = useDispatch();
  const { solana_balance, eventCount, ticketCount } = useSelector(
    (state) => state.user
  );

  let authData;
  if (typeof window !== "undefined") {
    authData = JSON.parse(localStorage.getItem("user"));
  }
  const router = useRouter();
  useEffect(() => {
    const formData = { address: authData?.user?.public_key };
    dispatch(getSolanaBalanceAction({ formData: formData }));
    dispatch(getEventCountAction());
    dispatch(getTicketCountAction());
  }, [router]);

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
              <p className="text-3xl font-bold text-green-400">
                {eventCount ?? 0}
              </p>
            </div>

            {/* Ticket Counts Card */}
            <div className="btn-transparent p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#e2e8ff] mb-2">
                Ticket Counts
              </h3>
              <p className="text-3xl font-bold text-blue-400">
                {ticketCount ?? 0}
              </p>
            </div>

            {/* Balance (Sol) Card */}
            <div className="btn-transparent p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#e2e8ff] mb-2">
                Balance (Sol)
              </h3>
              <p className="text-3xl font-bold text-yellow-400">
                {solana_balance?.balance ?? 0}
              </p>
            </div>
          </div>
        </div>
      </Dashboard>
    </Layout>
  );
}

export default AdminPage;
