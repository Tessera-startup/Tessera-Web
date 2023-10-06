import Image from "next/image";
import Link from "next/link";
import { React, useContext, useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import * as solanaWeb3 from "@solana/web3.js";
import { TessaraContext } from "../context/Context";
import { toast } from "react-toastify";
import {
  createEventTicketAction,
  getSolanaPrice,
} from "../services/actions/userActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const EventDetail = ({ event }) => {
  const { wallet, setWallet } = useContext(TessaraContext);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [solanaPrice, setSolanaPrice] = useState(0);
  const dispatch = useDispatch();
  const { purchase_ticket } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const purchaseTicket = async (receiver, amount) => {
    if (!formData.email || !formData.name)
      return toast.warning("Name and email are required");
    const connection = new solanaWeb3.Connection(
      "https://api.devnet.solana.com"
    );
    const lamports = amount * solanaWeb3.LAMPORTS_PER_SOL;

    try {
      const desPubKey = new solanaWeb3.PublicKey(receiver);
      const transactionInstruction = solanaWeb3.SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: desPubKey,
        lamports,
      });
      let trans = await setWalletTransaction(
        transactionInstruction,
        connection
      );
      let signature = await signAndSendTransaction(trans, connection);
    } catch (error) {
      console.log(error.message);
    }
  };

  const setWalletTransaction = async (instruction, connection) => {
    const transaction = new solanaWeb3.Transaction();
    transaction.add(instruction);
    transaction.feePayer = wallet.publicKey;
    let hash = await connection.getRecentBlockhash();
    transaction.recentBlockhash = hash.blockhash;
    return transaction;
  };

  const signAndSendTransaction = async (transaction, connection) => {
    const { signature } = await window.solana.signAndSendTransaction(
      transaction
    );
    await connection.confirmTransaction(signature);
    return signature;
  };

  useEffect(() => {
    const url = "https://data.messari.io/api/v1/assets/sol/metrics";
    axios.get(url).then((response) => {
      setSolanaPrice(response.data.data.market_data.price_usd);
    });
  }, []);

  return (
    <div className="container mx-auto mb-10 relative z-10">
      <Link className="flex items-center mt-32 mb-5 text-gray-400" href="/">
        <IoMdArrowBack /> <span className="ml-2">Go back</span>
      </Link>
      <div className="blog-header-image">
        <Image
          src={event?.image}
          alt={event?.name}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl lg:text-4xl text-[#ffffff] tessera-header font-semibold mb-4 section-header-title ">
          {event?.name}
        </h2>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Date: {event?.date_of_event}
        </p>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Location: {event?.location}
        </p>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Price: ${event?.amount}
        </p>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#ffffff]">
            About this Event
          </h2>
          <p className="text-base lg:text-lg text-[#e2e8ff]">
            {event?.description}
          </p>
        </div>

        <div>
          <div className="flex text-white text-[20px] font-bold mx-auto justify-center">
            <p>Purchase Ticket</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#e2e8ff]">
              Name:
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
              placeholder="Enter your name"
              // value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#e2e8ff]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-800 text-white btn-transparent rounded mt-1 px-3 py-2 w-full"
              placeholder="Enter your email"
              // value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div
            className="flex justify-center"
            onClick={async () => {
              if (wallet != "" && window.solana != undefined) {
                const data = {
                  event_id: event?._id,
                  amount: event?.amount,
                  customer_name: formData.name,
                  email: formData.email,
                };
                console.log(data);
                const res = await dispatch(
                  createEventTicketAction({ formData: data, toast })
                );
                if (res.error == undefined) {
                  const amount = event?.amount / solanaPrice;
                  purchaseTicket(purchase_ticket?.address, amount.toFixed(2));
                }
              } else {
                return toast.warning("Wallet not connected");
              }
            }}
          >
            <button className="px-8 py-2 inline-block  bg-slate-400 hover:bg-gray-400 rounded-md">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
