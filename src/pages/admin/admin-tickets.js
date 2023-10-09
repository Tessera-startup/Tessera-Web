import { API } from "../../services/axios_config";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getTicketCountAction } from "../../services/actions/userActions";

function AdminTickets() {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const dispatch = useDispatch();
  const { eventCount, ticketCount } = useSelector(state => state.user);



  const router = useRouter();

  useEffect(() => {
    dispatch(getTicketCountAction());
  });

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
          <p className="text-white ">Tickets Sold</p>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Event
                </th>
                <th scope="col" class="px-6 py-3">
                  Ticket Owner
                </th>
                <th scope="col" class="px-6 py-3">
                  Date Paid
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount Paid(sol)
                </th>
                <th scope="col" class="px-6 py-3">
                  Payer address
                </th>

              </tr>
            </thead>
            <tbody>
              {ticketCount?.map((ticket, i) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ticket?.event_name}
                  </th>
                  <td class="px-6 py-4">
                    {ticket?.customer_name}
                  </td>
                  <td class="px-6 py-4">
                    {ticket?.date.slice(0, 25)}
                  </td>
                  <td class="px-6 py-4">
                    {ticket?.amount} SOL
                  </td>
                  <td class="px-6 text-[10px] py-4">
                    {ticket?.payer_address}
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

export default AdminTickets;
