import { API } from "../../services/axios_config";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getTicketCountAction } from "../../services/actions/userActions";
import Image from "next/image";
import EventCalender from "../../../public/calendar.png";
import EventName from "../../../public/placard.png";
import EventPrice from "../../../public/solana.png";
import EventOwner from "../../../public/id-card.png";
import EventAddress from "../../../public/solana-address.png";

function AdminTickets() {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const dispatch = useDispatch();
  const { eventCount, ticketCount } = useSelector((state) => state.user);

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
        <div
          className="relative p-0 sm:p-8 about z-10 overflow-x-auto shadow-md sm:rounded-lg ml-2 bg-gray-800"
          style={{ marginTop: "100px" }}
        >
          <Link
            className="flex items-center mb-4 text-white cursor-pointer w-20%"
            href="/admin"
          >
            <IoMdArrowBack /> <span className="ml-2">Go back</span>
          </Link>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Tickets Sold
          </h2>
          <table class="w-full text-sm text-left text-white">
            <thead className="text-white text-xl uppercase bg-gray-700">
              {" "}
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div className="flex items-center">
                    <p className="mr-2">Event</p>
                    <Image src={EventName} alt="event" width={30} height={50} />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex items-center">
                    <p className="mr-2">Ticket Owner</p>
                    <Image
                      src={EventOwner}
                      alt="event"
                      width={30}
                      height={50}
                    />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex items-center">
                    <p className="mr-2">Date Paid</p>
                    <Image
                      src={EventCalender}
                      alt="event"
                      width={30}
                      height={30}
                    />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex items-center">
                    <p className="mr-2">Amount Paid(sol)</p>
                    <Image
                      src={EventPrice}
                      alt="event"
                      width={30}
                      height={30}
                    />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex items-center">
                    <p className="mr-2">Payer address</p>
                    <Image
                      src={EventAddress}
                      alt="event"
                      width={30}
                      height={30}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ticketCount?.map((ticket, i) => (
              <tr className="btn-transparent bg-gray-600" key={i}>
                 <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ticket?.event_name}
                  </th>
                  <td class="px-6 py-4">{ticket?.customer_name}</td>
                  <td class="px-6 py-4">{ticket?.date.slice(0, 25)}</td>
                  <td class="px-6 py-4">{ticket?.amount} SOL</td>
                  <td class="px-6 text-[10px] py-4">{ticket?.payer_address}</td>
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
