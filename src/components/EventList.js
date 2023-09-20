import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EventList = () => {
  // Sample event data (you can replace this with actual data)
  const intialEvents = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "October 15, 2023",
      location: "Virtual",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/v1687936947/b5h4yxj0ajbwcdftjfx6.png",
    },
    {
      id: 2,
      title: "Music Festival 2023",
      date: "November 5, 2023",
      location: "City Park",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "December 10, 2023",
      location: "Art Gallery",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
    },
    {
      id: 4,
      title: "Food Expo",
      date: "January 20, 2024",
      location: "Convention Center",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
    },
    {
      id: 5,
      title: "Startup Pitch Event",
      date: "February 8, 2024",
      location: "Tech Hub",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
    },
    {
      id: 6,
      title: "Fitness Expo",
      date: "March 30, 2024",
      location: "Sports Complex",
      imageUrl:
        "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
    },
  ];

  const [visibleEvents, setVisibleEvents] = useState(3);

  const loadMoreEvents = () => {
    setVisibleEvents(visibleEvents + 3);
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-0">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-0">
        {intialEvents.slice(0, visibleEvents).map((event) => (
           <Link href={`/event/${event.id}`} key={event.id}>
            <div key={event.id} className="bg-white m-4 rounded shadow-md">
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={640}
                height={480}
                layout="responsive"
                objectFit="cover"
                className="rounded-t-md mb-2"
              />
              <div className="p-3">
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <div className="flex justify-between">
                  <p>$10</p>
                  <p>Get Ticket</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleEvents < intialEvents.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreEvents}
            className="text-lg bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default EventList;
