import React, { useState } from "react";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { toast } from "react-toastify";
import { createEventAction } from "../../services/actions/userActions";
import { useDispatch } from "react-redux";

function CreateEventPage() {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    image: "",
    date_of_event: "",
    amount: "",
    description: "",
    location: "",
    name: "",
    ticket_count: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  //image handler - issue handling image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] })
  };

  const handleSubmit = async (e) => {
    console.log("PRESSED", formData);
    e.preventDefault();
    const res = await dispatch(createEventAction({ formData, toast }))
    console.log("GOT HERE");


  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <Dashboard>

        <div className="event-content  p-0 sm:p-8 about relative z-10">
          <Link
            className="flex items-center mb-5 text-gray-400"
            href="/admin"
          >
            <IoMdArrowBack /> <span className="ml-2">Go back</span>
          </Link>
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
                name="image"
                onChange={(e) => handleImageChange(e)}
                accept="image/*"
                className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2 w-full"
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
            <div className="flex flex-row space-x-2">
              <div className="mb-4">
                <label className="block text-lg text-[#e2e8ff] font-semibold mb-2">
                  Ticket Amount:
                </label>
                <input
                  type="number"
                  name="amount"

                  onChange={(e) => handleChange(e)}
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
                  name="date_of_event"

                  onChange={(e) => handleChange(e)}
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
                  name="ticket_count"

                  onChange={(e) => handleChange(e)}
                  className="bg-gray-800 text-[#e2e8ff] btn-transparent rounded-md p-2"
                  required
                />
              </div>
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
