import React, { useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

function CreateEventPage() {
  // State variables for form fields
  const [eventImage, setEventImage] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketCount, setTicketCount] = useState(0);
  const [eventDescription, setEventDescription] = useState("");
  const [ticketAmount, setTicketAmount] = useState(0);

  // Function to handle file input change and update image preview
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEventImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setEventImage(null);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Image:", eventImage);
    console.log("Event Title:", eventTitle);
    console.log("Event Date:", eventDate);
    console.log("Ticket Count:", ticketCount);
    console.log("Event Description:", eventDescription);
    console.log("Ticket Amount:", ticketAmount);
    
    
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <Link
          className="flex items-center mt-32 mb-5 text-gray-400"
          href="/admin"
        >
          <IoMdArrowBack /> <span className="ml-2">Go back</span>
        </Link>
        <div className="event-content  p-0 sm:p-8 about relative z-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Create a New Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Event Image:
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                required
              />
              {eventImage && (
                <div className="mt-2">
                  <img
                    src={eventImage}
                    alt="Event Preview"
                    className="max-w-full h-auto"
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Event Name:
              </label>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Event Description:
              </label>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full h-32" // Adjust the height as needed
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Ticket Amount:
              </label>
              <input
                type="number"
                value={ticketAmount}
                onChange={(e) => setTicketAmount(e.target.value)}
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Event Date:
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                Ticket Count:
              </label>
              <input
                type="number"
                value={ticketCount}
                onChange={(e) => setTicketCount(e.target.value)}
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-transparent text-[#e2e8ff] px-5 py-3 rounded-md hover:text-gray-400 transition duration-300"
            >
              Create Event
            </button>
          </form>
        </div>
      </Dashboard>
    </Layout>
  );
}

export default CreateEventPage;
