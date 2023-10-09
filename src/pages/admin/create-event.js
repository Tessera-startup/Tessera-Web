import React, { useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { toast } from "react-toastify";
import { createEventAction } from "../../services/actions/userActions";
import { useDispatch } from "react-redux";
import Image from "next/image";
import EventName from "../../../public/placard.png";

function CreateEventPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: "",
    date_of_event: "",
    amount: "",
    description: "",
    location: "",
    name: "",
    ticket_count: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //image handler - issue handling image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Start loading

      const res = await dispatch(createEventAction({ formData, toast }));

      if (res.error === undefined) {
        // If the request is successful, you can handle it here
        console.log("Event created successfully");
      } else {
        // Handle errors, log the error message, etc.
        console.error("Error creating event:", res.error);
      }

      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Unexpected error creating event:", error);
      setLoading(false); // Stop loading even if there's an unexpected error
    }
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>
        <div
          className="relative event-content p-0 sm:p-8 about z-10 overflow-x-auto shadow-md sm:rounded-lg ml-2 bg-gray-800"
          style={{ marginTop: "100px",marginBottom: "30px" }}
        >
          <Link
            className="flex items-center mt-16 mb-4 text-gray-400 hover:text-gray-600 cursor-pointer w-20%"
            href="/admin"
          >
            <IoMdArrowBack /> <span className="ml-2">Go back</span>
          </Link>
          <div className="btn-transparent p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <p className="text-3xl font-semibold text-white mr-2">
                Create a New Event
              </p>
              <Image src={EventName} alt="event" width={30} height={30} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                  Event Image:
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleImageChange(e)}
                  accept="image/*"
                  className="bg-transparent text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                  required
                />
                {formData.image ? (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(formData.image)}
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
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className="bg-transparent text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                  Event Location:
                </label>
                <input
                  type="text"
                  name="location"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                  Event Description:
                </label>
                <textarea
                  name="description"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full h-32"
                  required
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                    Ticket Amount:
                  </label>
                  <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                    Ticket Count:
                  </label>
                  <input
                    type="number"
                    name="ticket_count"
                    onChange={handleChange}
                    className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                    Event Date:
                  </label>
                  <input
                    type="date"
                    name="date_of_event"
                    onChange={handleChange}
                    className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="relative text-gray-300 btn-transparent bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm "
                disabled={loading}
              >
                {loading ? (
                  <div className="lds-dual-ring-container">
                    <div className="flex justify-center items-center">
                      Creating event <div className="lds-dual-ring"></div>
                    </div>
                  </div>
                ) : (
                  <span>Create event</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </Dashboard>
    </Layout>
  );
}

export default CreateEventPage;
