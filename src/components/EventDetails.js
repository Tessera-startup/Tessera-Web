import Image from "next/image";
import QRCode from "qrcode.react";
import React from "react";

const EventDetail = ({ event }) => {
  return (
    <div className="container mx-auto text-gray-500">
      <div>
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="mt-8 p-4 md:p-8">
        <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mb-4">
          {event.title}
        </h2>
        <p className="text-lg lg:text-xl font-medium">Date: {event.date}</p>
        <p className="text-lg lg:text-xl font-medium">
          Location: {event.location}
        </p>
        <p className="text-lg lg:text-xl font-medium">Price: $10</p>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            About this Event
          </h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl font-semibold">Directions</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id tellus nec felis consectetur ultrices. Integer fringilla urna et
            semper tempor. Vestibulum scelerisque elit nec libero mattis, id
            malesuada tortor feugiat. Vivamus eu imperdiet lorem. Suspendisse ut
            justo sit amet neque ultrices venenatis non non velit.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <QRCode value={event.qrCodeData} size={128} />
          <div className="mt-5 text-center">
            <p className="text-lg lg:text-xl font-semibold mb-2">
              How to Use Your QR Code
            </p>
            <p className="text-base lg:text-lg">
              To obtain your event ticket, simply present this QR code at the
              event entrance.
            </p>
            <p className="text-base lg:text-lg mt-2">
              Please ensure you have completed the necessary registration or
              purchase process before arriving at the event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
