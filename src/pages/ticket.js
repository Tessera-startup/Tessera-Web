import React from "react";
import QRCode from "qrcode.react";
import Layout from "../components/Layout";

// Dummy NFT data (replace with real data later)
const nftTickets = [
  {
    id: 1,
    eventName: "Tech Conference 2023",
    location: "Virtual",
    date: "October 15, 2023",
    qrCodeData: "dummy-qr-code-data-1", // Replace with actual QR code data
    seatNumber: "A123",
    imageUrl:
      "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  },
  {
    id: 2,
    eventName: "Music Festival 2023",
    location: "City Park",
    date: "November 5, 2023",
    qrCodeData: "dummy-qr-code-data-2",
    seatNumber: "B456",
    imageUrl:
      "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  },
  {
    id: 3,
    eventName: "Art Exhibition",
    location: "Art Gallery",
    date: "December 10, 2023",
    qrCodeData: "dummy-qr-code-data-3",
    seatNumber: "C789",
    imageUrl:
      "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  },
];

const NftTicket = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">NFT Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nftTickets.map((nftTicket) => (
            <div
              key={nftTicket.id}
              className="bg-white p-4 rounded shadow-md border border-gray-300"
            >
              <h3 className="text-lg font-semibold mb-2">NFT Ticket</h3>
              <div className="mb-4">
                <img
                  src={nftTicket.imageUrl}
                  alt={nftTicket.eventName}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between align-baseline">
                <div>
                  <p>Event: {nftTicket.eventName}</p>
                  <p>Location: {nftTicket.location}</p>
                  <p>Date: {nftTicket.date}</p>
                  <p>Seat Number: {nftTicket.seatNumber}</p>
                </div>
                <div className="mb-4 lg:mt-0 md:mt-6 qr-code">
                  <QRCode value={nftTicket.qrCodeData} size={128} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NftTicket;
