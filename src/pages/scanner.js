import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Link from "next/link";

const Scanner = (props) => {
  const [data, setData] = useState(null);



  return (
    <div className="flex flex-col justify-center bg-white h-screen w-full px-20 py-12">
      <div className="w-full lg:w-2/3 flex flex-col justify-center mx-auto">
        <div className="flex justify-center">
          <p className="text-[15px] italic text-black font-bold">
            Tessera Ticket Verification Page
          </p>
        </div>

        <div className="flex justify-center">
          <QrReader

            className="flex w-full lg:w-2/5"

            onResult={(result, error) => {
              if (!!result) {
                const parsedData = JSON.parse(result?.text);
                if (parsedData.hasOwnProperty("is_paid")) {
                  setData(parsedData);
                } else {
                  setData("ERRR");
                  console.log();
                }
              }

              if (!!error) {
                console.info(error);
                if (
                  error.toString().includes("SyntaxError") ||
                  error.toString().includes("Unexpected")
                ) {
                  setData("ERR");
                }
              }
            }}
            style={{ width: "40%", height: "40%" }}
            constraints={{ facingMode: 'environment' }}
            key="environment"
          />
        </div>

        {data == null ? (
          <p className="flex mx-auto">No Data Loaded</p>
        ) : data?.is_paid == true ? (
          <div className="flex flex-col justify-center rounded-xl shadow-xl w-full lg:2/5 border px-4 h 1/2 py-4 mx-auto">
            <div className="flex space-x-2 mx-auto">
              <p className="text-green-500 font-bold italic">
                Payment Verifed{" "}
              </p>
              <BsCheckCircle color="green" size={25} />
            </div>
            <hr className="my-1" />

            <div>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Ticket Owner: {data.customer_name}{" "}
              </p>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Event: {data?.event_name}{" "}
              </p>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Date Paid: {data?.date}
              </p>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Location:{data?.location}{" "}
              </p>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Ticket ID : {data?.id}
              </p>
              <p className="text-black font-bold italic text-[8px] lg:text-[9px]">
                Payer's Address : {data?.payer_address}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center rounded-xl shadow-xl border px-4 h 1/2 py-4 w-2/5 mx-auto">
            <div className="flex flex-col space-y-2 mx-auto">
              <p className="text-red-500 font-bold italic">
                Payment Not Verifed{" "}
              </p>
              <ImCancelCircle color="red" size={30} className="flex mx-auto" />
            </div>
          </div>
        )}
        <div className="flex space-x-2 w-full lg:w-1/2 mx-auto">
          <button
            onClick={() => location.reload()}
            className="bg-blue-400 w-2/3 mx-auto text-white py-2 px-2 rounded-lg mt-2"
          >
            Reload Scanner
          </button>

          <Link
            href="/"
            className="flex bg-pink-400 w-2/3 mx-auto text-white py-2 px-2 rounded-lg mt-2 justify-center"
          >
            <p> Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
