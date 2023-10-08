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
import { loginAction } from "../services/actions/authActions";

function AdminPage() {
  const dispatch = useDispatch();
  const { solana_balance, eventCount, ticketCount } = useSelector(
    (state) => state.user
  );
  const { authData } = useSelector((state) => state.auth);

  const auth =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      // Check if authData is not null and authData.user exists before accessing its properties
      if (
        !auth ||
        !authData ||
        !authData.user ||
        Object.keys(authData.user).length === 0
      ) {
        // If authData is not available during the initial load, you may want to fetch it again or redirect to login
        await dispatch(loginAction());
        const newAuthData = JSON.parse(localStorage.getItem("user"));
        if (
          !newAuthData ||
          !newAuthData.user ||
          Object.keys(newAuthData.user).length === 0
        ) {
          router.push("/login");
        } else {
          const formData = { address: newAuthData.user.public_key };
          dispatch(getSolanaBalanceAction({ formData: formData }));
          dispatch(getEventCountAction());
          dispatch(getTicketCountAction());
        }
      } else {
        const formData = { address: authData?.user?.public_key };
        dispatch(getSolanaBalanceAction({ formData: formData }));
        dispatch(getEventCountAction());
        dispatch(getTicketCountAction());
      }
    };

    fetchData();
  }, [authData, router, dispatch]);

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
