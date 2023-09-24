import React, { useState } from "react";
import Layout from "../components/Layout";

const SponsorSignup = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <Layout>
      <div className="gradient fixed"></div>
      <div className="container mx-auto mt-8">
        {registered ? (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-400">
              Registration Successful!
            </h2>
            <p>Your sponsor account has been created.</p>
          </div>
        ) : (
          <div className="max-w-screen-sm mx-auto mt-9 px-5">
            <h2 className="text-3xl font-semibold mb-4 text-[#e2e8ff]">
              Sponsor Signup
            </h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label htmlFor="businessName" className="block text-[#e2e8ff]">
                  Business Name:
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#e2e8ff]">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-[#e2e8ff]">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-[#e2e8ff]">
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-[#e2e8ff]">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-700 text-[#e2e8ff] px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300 transform hover:scale-105"
              >
                Signup
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SponsorSignup;
