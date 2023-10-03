import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode.react";
import { React, useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import * as solanaWeb3 from "@solana/web3.js";
import { TessaraContext } from "../context/Context";
import { toast } from "react-toastify";



const EventDetail = ({ event }) => {
  const { wallet, setWallet } = useContext(TessaraContext)
  const [formData, setFormData] = useState({name:"", email:""})


  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  const purchaseTicket = async (receiver, amount) => {
    if(!formData.email || !formData.name)return toast.warning("Name and email are required")
    const connection = new solanaWeb3.Connection("https://api.devnet.solana.com")
    const lamports = amount * solanaWeb3.LAMPORTS_PER_SOL

    try {
      const desPubKey = new solanaWeb3.PublicKey(receiver)
      const transactionInstruction = solanaWeb3.SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: desPubKey,
        lamports
      })
      let trans = await setWalletTransaction(transactionInstruction, connection)
      let signature = await signAndSendTransaction(trans, connection)
    } catch (error) {
      console.log(error.message);

    }

  }


  const setWalletTransaction = async (instruction, connection) => {
    const transaction = new solanaWeb3.Transaction();
    transaction.add(instruction);
    transaction.feePayer = wallet.publicKey;
    let hash = await connection.getRecentBlockhash();
    transaction.recentBlockhash = hash.blockhash;
    return transaction;
  }

  const signAndSendTransaction = async (transaction, connection) => {
    const { signature } = await window.solana.signAndSendTransaction(
      transaction
    );
    await connection.confirmTransaction(signature);
    return signature;
  }





  return (
    <div className="container mx-auto mb-10 relative z-10">
      <Link className="flex items-center mt-32 mb-5 text-gray-400" href="/">
        <IoMdArrowBack /> <span className="ml-2">Go back</span>
      </Link>
      <div className="blog-header-image">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl lg:text-4xl text-[#ffffff] tessera-header font-semibold mb-4 section-header-title ">
          {event.title}
        </h2>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Date: {event.date}
        </p>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Location: {event.location}
        </p>
        <p className="text-lg lg:text-xl font-medium text-[#e2e8ff]">
          Price: $10
        </p>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#ffffff]">
            About this Event
          </h2>
          <p className="text-base lg:text-lg text-[#e2e8ff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#ffffff]">
            Directions
          </h2>
          <p className="text-base lg:text-lg text-[#e2e8ff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div>
          <div className="flex text-white text-[20px] font-bold mx-auto justify-center"><p>Purchase Ticket</p></div>
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
          <div className="flex justify-center"

            onClick={() => {
              console.log(formData, "FOMRDATA");
              if (wallet != "" | window.solana == undefined) {
                
                purchaseTicket("39QcE4gSNztpjvq78aa45W6J9Pn551is52C2XxhSsDTR", 0.01)
              } else {
                return toast.warning("Wallet not connected")
              }

            }}
          >
            <button className="px-8 py-2 inline-block  bg-slate-400 hover:bg-gray-400 rounded-md">Purchase</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetail;
