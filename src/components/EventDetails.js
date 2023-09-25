import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode.react";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const EventDetail = ({ event }) => {
  return (
    <div className="container mx-auto mb-10 relative z-50">
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
        <div className="mt-8 flex flex-col items-center">
          <QRCode value={event.qrCodeData} size={128} />
          <div className="mt-5 text-center">
            <p className="text-lg lg:text-xl font-semibold mb-2 text-[#ffffff]">
              How to Use Your QR Code
            </p>
            <p className="text-base lg:text-lg text-[#e2e8ff]">
              To obtain your event ticket, simply present this QR code at the
              event entrance.
            </p>
            <p className="text-base lg:text-lg mt-2 text-[#e2e8ff]">
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
