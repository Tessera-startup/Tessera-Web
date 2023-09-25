import React, { useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";

function CreateEventPage() {
  // State variables for form fields
  const [eventImage, setEventImage] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketCount, setTicketCount] = useState(0);
  const [eventDescription,setEventDescription] = useState("");

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
    // You can handle form submission logic here, such as sending data to the server.
    // For now, let's log the form values to the console.
    console.log("Event Image:", eventImage);
    console.log("Event Title:", eventTitle);
    console.log("Event Date:", eventDate);
    console.log("Ticket Count:", ticketCount);
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <div className="container p-0 sm:p-8 about relative z-10">
          <h2 className="text-3xl font-semibold text-white mb-4 mt-12">
            Create a New Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg text-white font-semibold mb-2">
                Event Image:
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="bg-gray-800 text-white border rounded-md p-2 w-full"
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
              <label className="block text-lg text-white font-semibold mb-2">
                Event Title:
              </label>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="bg-gray-800 text-white border rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white font-semibold mb-2">
                Event Description:
              </label>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="bg-gray-800 text-white border rounded-md p-2 w-full h-32" // Adjust the height as needed
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white font-semibold mb-2">
                Event Date:
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="bg-gray-800 text-white border rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white font-semibold mb-2">
                Ticket Count:
              </label>
              <input
                type="number"
                value={ticketCount}
                onChange={(e) => setTicketCount(e.target.value)}
                className="bg-gray-800 text-white border rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-500 border-2 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
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
