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
  const { purchase_ticket, loadingState } = useSelector((state) => state.user);

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

  const handlePurchase = async (e, event_id, amount, name, email, address) => {
    e.preventDefault();

    if (wallet != "" && window.solana != undefined) {
      const data = {
        event_id: event_id,
        amount: amount,
        customer_name: name,
        email: email,
      };
      const res = await dispatch(
        createEventTicketAction({ formData: data, toast })
      );

      if (res.error == undefined) {
        const amount = event?.amount / solanaPrice;
        purchaseTicket(address, amount.toFixed(2));
      }
    } else {
      return toast.warning("Wallet not connected");
    }
  };

  useEffect(() => {
    const url = "https://data.messari.io/api/v1/assets/sol/metrics";
    axios.get(url).then((response) => {
      setSolanaPrice(response.data.data.market_data.price_usd);
    });
  }, []);

  return (
    <div className="container mx-auto mb-10 relative z-10 ">
      <Link className="flex items-center mt-32 mb-5 text-gray-400" href="/">
        <IoMdArrowBack /> <span className="ml-2">Go back</span>
      </Link>
      <div className="bg-gradient-to-r from-web3blue to-web3purple rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 blog-header-image border border-gray-700 flex flex-col p-5">
        <div className="blog-header-image ">
          <Image
            src={event?.image}
            alt={event?.name}
            width={1000}
            height={600}
            layout="responsive"
            objectFit="contain"
            className="responsive-image"
          />
          <Image
            src={event?.image}
            alt={event?.name}
            fill
            objectPosition="center"
            className="rounded-md"
            style={{
              objectFit: "cover",
            }}
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
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#ffffff] mb-4">
              About this Event
            </h2>
            <p className="text-base lg:text-lg text-[#e2e8ff]">
              {event?.description}
            </p>
          </div>

          <form
            onSubmit={(e) =>
              handlePurchase(
                e,
                event?._id,
                event?.amount,
                formData?.name,
                formData?.email,
                purchase_ticket?.address
              )
            }
            className="mt-4"
          >
            <div className="flex text-white text-[20px] font-bold mx-auto justify-center">
              <p className="font-boldy">Purchase Ticket</p>
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
              onSubmit={(e) => e.preventDefault()}
            >
              {!loadingState ? (
                <button
                  type="submit"
                  className="px-8 py-2 inline-block  bg-slate-400 hover:bg-gray-400 rounded-md"
                >
                  Purchase
                </button>
              ) : (
                <button className="px-8 py-2 inline-block  bg-slate-400 hover:bg-gray-400 rounded-md">
                  Processing
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
