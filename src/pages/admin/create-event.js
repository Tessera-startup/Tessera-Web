import React, { useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

function CreateEventPage() {
  const [eventImage, setEventImage] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketCount, setTicketCount] = useState(0);
  const [eventDescription, setEventDescription] = useState("");
  const [ticketAmount, setTicketAmount] = useState(0);

  //image handler - issue handling image upload
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", eventTitle);
    formData.append("date_of_event", eventDate);
    formData.append("location", eventLocation);
    formData.append("ticket_count", ticketCount);
    formData.append("amount", ticketAmount);
    formData.append("image", eventImage);
    formData.append("description", eventDescription);

    // Proceed with the request using accessToken..
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toast.error("Authorization token is missing. Please log in.");
      return;
    }

    console.log("formData:", formData);
    console.log("headers:", {
      "Content-Type": "multipart/form-data",
      Authorization: accessToken,
    });

    try {
      const response = await axios.post(
        "https://tessera-api.onrender.com/events/create-event",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201) {
        // Event creation successful
        toast.success("Event created successfully!");
      } else {
        toast.error("Failed to create the event. Please try again.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("An error occurred. Please try again later.");
    }
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
              {eventImage ? (
                <div className="mt-2">
                  <img
                    src={eventImage}
                    alt="Event Preview"
                    className="max-w-full h-auto"
                  />
                </div>
              ) : (
                <p className="text-gray-400 mt-2">No image selected</p>
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
                Event Location:
              </label>
              <input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
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
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full h-32"
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
              className="mb-28 btn-transparent text-[#e2e8ff] px-5 py-3 rounded-md hover:text-gray-400 transition duration-300"
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
