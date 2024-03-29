import React, { useContext, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import Image from "next/image";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllEventsAction,
  getTicketsAction,
  mintNftAction,
} from "../services/actions/userActions";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import { TessaraContext } from "../context/Context";

// Dummy NFT data (replace with real data later)

const NftTicket = () => {
  const { tickets, events, loadingState } = useSelector((state) => state.user);
  const [currentButton, setCurrentButton] = useState(0)
  const { wallet } = useContext(TessaraContext)
  const dispatch = useDispatch();

  
  const connectedWalletTicket = tickets?.filter((ticks) => ticks?.payer_address === wallet?.publicKey?.toBase58())


  const eventImage = (id) => {
    const ev = events?.filter((event) => event?._id === id)[0];
    return ev;
  };

  const downLoadTicket = async (image_url) => {
    const res = await saveAs(image_url, "image.png");
  };
  useEffect(() => {
    dispatch(getAllEventsAction());
    dispatch(getTicketsAction());
  }, []);


  useEffect(() => {

  }, [currentButton, setCurrentButton, wallet])


  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container mx-auto mt-32 px-4 tessera-header relative z-10">
        <h1 className="text-3xl font-bold mb-4 tessera-header text-white">
          QRCODE Tickets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {connectedWalletTicket?.map((nftTicket, index) => (
            <div
              key={nftTicket?._id}
              className="bg-[#111827] p-4 blog-header-image border border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-300">
                NFT Ticket
              </h3>
              <div className="mb-4">
                <Image
                  src={eventImage(nftTicket?.event_id)?.image}
                  alt={nftTicket?._id}
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  // alt={nftTicket.eventName}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between align-baseline">
                <div className="flex-[0.5] text-gray-400">
                  <p className="text-[10px]">
                    Event: {eventImage(nftTicket?.event_id)?.name}
                  </p>
                  <p className="text-[10px]">
                    Location: {eventImage(nftTicket?.event_id)?.location}
                  </p>
                  <p className="text-[10px]">
                    Date Paid: {nftTicket?.date?.slice(0, 25)}
                  </p>
                  <p className="text-[10px]">
                    Ticket Owner: {nftTicket?.customer_name}
                  </p>
                  <p className="text-[10px]">
                    Payer Address: {nftTicket?.payer_address}
                  </p>
                </div>
                <div className="flex-[0.5] mb-4 lg:mt-0 md:mt-6 mt-5 qr-code">
                  {/* <QRCode value={nftTicket.qrCodeData} size={128} /> */}
                  <img src={nftTicket?.qrcode_data} alt="" className="w-full" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg: space-x-2 lg:mx-auto space-y-2">
                {loadingState && index === currentButton ?
                  <button className="px-4 py-2 w-full rounded-sm font-semibold bg-purple-500">
                    Minting in process
                  </button>

                  : <button
                    onClick={() => {

                      setCurrentButton(index)

                      if (wallet?.publicKey !== undefined) {
                        const form = {
                          id: nftTicket?._id,
                          to: wallet?.publicKey.toBase58()
                        }
                        if (wallet?.publicKey.toBase58() === nftTicket?.payer_address) {

                          dispatch(mintNftAction({ formData: form, toast }))
                          // setCurrentButton(-1)


                        } else {
                          toast.warning('You dont own this ticket')

                        }
                      } else {
                        setCurrentButton(-1)
                        toast.warning('Connect wallet to mint')
                      }

                    }}
                    className="px-4 py-2 w-full rounded-sm font-semibold bg-purple-500"
                  >
                    Mint ticket
                  </button>

                }
                <button
                  onClick={() => {

                    if (wallet?.publicKey !== undefined && wallet?.publicKey?.toBase58() === nftTicket?.payer_address) {
                      downLoadTicket(nftTicket?.qrcode_data)
                    } else {
                      toast.warning('Ensure wallet is connected and you own this ticket')
                    }

                  }}
                  className="px-4 py-2 w-full rounded-sm font-semibold bg-slate-500"
                >
                  Download ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
    </Layout>
  );
};

export default NftTicket;
