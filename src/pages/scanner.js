import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { BsCheckCircle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'

const Scanner = (props) => {
  const [data, setData] = useState(null);
  // const jsonData = JSON.stringify(data)
  // const parseData = JSON.parse(jsonData)

  return (
    <div className='flex flex-col justify-center bg-white h-screen w-full'>
      <div className='w-2/3 flex flex-col justify-center mx-auto'>
        <div className='flex justify-center'>
          <p className='text-[20px] italic text-black font-bold'>Scan Ticket QR-CODE To Verify Payment</p>
        </div>


        <div className='flex justify-center'>
          <QrReader
            className='flex w-2/5'
            onResult={(result, error) => {
              if (!!result) {
                const parsedData = JSON.parse(result?.text);
                if (parsedData.hasOwnProperty('is_paid')) {
                  setData(parsedData);

                  console.log(data);
                } else {
                  setData("ERRR")
                  console.log();
                }
              }

              if (!!error) {
                console.info(error);
                if (error.toString().includes("SyntaxError") || error.toString().includes("Unexpected")) {
                  setData("ERR")
                }


              }
            }}
            style={{ width: '40%', height: '40%' }}
          />
        </div>


        {data == null ? <p className='flex mx-auto'>No data Loaded</p> :

          data?.is_paid == true ?
            <div className='flex flex-col justify-center rounded-xl shadow-xl border px-4 h 1/2 py-4 w-2/5 mx-auto'>
              <div className='flex space-x-2 mx-auto'>
                <p className='text-green-500 font-bold italic'>Payment Verifed </p>
                <BsCheckCircle color='green' size={25} />
              </div>
              <hr className='my-2' />

              <div>
                <p className='text-black font-bold italic text-[9px]'>Ticket Owner: {data.customer_name} </p>
                <p className='text-black font-bold italic text-[9px]'>Event:  {data?.event_name} </p>
                <p className='text-black font-bold italic text-[9px]'>Date Paid: {data?.date}</p>
                <p className='text-black font-bold italic text-[9px]'>Location:{data?.location} </p>
                <p className='text-black font-bold italic text-[9px]'>Payer's Address : {data?.payer_address}</p>


              </div>
            </div>

            : <div className='flex flex-col justify-center rounded-xl shadow-xl border px-4 h 1/2 py-4 w-2/5 mx-auto'>
              <div className='flex flex-col space-y-2 mx-auto'>
                <p className='text-red-500 font-bold italic'>Payment Not Verifed </p>
                <ImCancelCircle color='red' size={30} className='flex mx-auto' />
              </div>

            </div>}

      </div>
    </div>
  );
};

export default Scanner;